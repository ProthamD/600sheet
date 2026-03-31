#!/usr/bin/env python3
"""
Custom converter for 600-sheet CSV to DSA Tracker JSON format
Handles the specific structure of the 600 DSA sheet
"""

import csv
import json
import re

def extract_url(text):
    """Extract URL from text if present"""
    if not text:
        return None
    # Match URLs
    url_pattern = r'https?://[^\s]+'
    match = re.search(url_pattern, text)
    if match:
        return match.group(0)
    return None

def get_difficulty(task_name, category):
    """Guess difficulty based on category and task name"""
    easy_keywords = ['basic', 'simple', 'intro', 'data type', 'input', 'output', 'print', 'easy']
    medium_keywords = ['array', 'string', 'matrix', 'search', 'sort', 'medium', 'dynamic']
    hard_keywords = ['hard', 'complex', 'graph', 'tree', 'advanced']
    
    task_lower = task_name.lower()
    
    for keyword in hard_keywords:
        if keyword in task_lower or keyword in category.lower():
            return 'hard'
    
    for keyword in medium_keywords:
        if keyword in task_lower or keyword in category.lower():
            return 'medium'
    
    return 'easy'

def get_category_icon(category):
    """Get emoji icon for category"""
    icons = {
        'Introduction to any Coding language': '📚',
        'Conditionals': '❓',
        'Loops': '🔁',
        'Number System': '🧮',
        'Patterns': '🎨',
        'Functions and Arrays': '📦',
        'Strings': '📝',
        'Arrays': '📊',
        'Searching': '🔍',
        'Sorting': '↕️',
        'Matrix': '🔲',
        'Hashing': '#️⃣',
        'Two Pointers': '👉',
        'Stack': '📚',
        'Queue': '📋',
        'Linked List': '🔗',
        'Trees': '🌳',
        'Graphs': '🔀',
        'Greedy': '🎁',
        'Dynamic Programming': '🎯',
        'Recursion': '🔁',
        'Backtracking': '⏪',
        'Bit Manipulation': '⚙️',
    }
    
    for key, icon in icons.items():
        if key.lower() in category.lower():
            return icon
    
    return '📌'

def convert_csv_to_json(csv_file):
    """Convert 600-sheet CSV to DSA Tracker format"""
    
    categories = {}
    task_id = 1
    current_category = None
    
    try:
        with open(csv_file, 'r', encoding='utf-8') as f:
            reader = csv.reader(f)
            
            for row_num, row in enumerate(reader, 1):
                # Skip empty rows
                if not any(row) or len(row) < 2:
                    continue
                
                # Normalize row - ensure we have at least 4 columns
                while len(row) < 4:
                    row.append('')
                
                col0 = row[0].strip()
                col1 = row[1].strip()
                col2 = row[2].strip()
                col3 = row[3].strip() if len(row) > 3 else ''
                
                # Skip header and intro rows
                if any(skip in col2 for skip in ['DSA Sheet', 'Always remember', 'Contact us', 'Make a copy', 'Introduction to any']):
                    if 'Introduction to any' in col2:
                        current_category = col2
                        if current_category not in categories:
                            categories[current_category] = {
                                'id': len(categories) + 1,
                                'category': current_category,
                                'icon': get_category_icon(current_category),
                                'tasks': []
                            }
                    continue
                
                # Detect category: has content in col2, and col1 is empty (no FALSE/TRUE)
                if col2 and not col1 and col1 != 'FALSE' and col1 != 'TRUE':
                    # This is a category header
                    current_category = col2
                    if current_category not in categories:
                        categories[current_category] = {
                            'id': len(categories) + 1,
                            'category': current_category,
                            'icon': get_category_icon(current_category),
                            'tasks': []
                        }
                    continue
                
                # Detect task: col1 is 'FALSE' or 'TRUE' and col2 has task name
                if col1 in ['FALSE', 'TRUE'] and col2:
                    if current_category:
                        task_name = col2.strip('"')
                        
                        # Extract URL from col3 or col4
                        link = extract_url(col3) or extract_url(row[4] if len(row) > 4 else '')
                        
                        # Only add if task name is meaningful
                        if task_name and len(task_name) > 2:
                            task = {
                                'id': task_id,
                                'name': task_name,
                                'difficulty': get_difficulty(task_name, current_category),
                                'link': link or '#',
                                'description': f"{current_category} - Problem"
                            }
                            
                            categories[current_category]['tasks'].append(task)
                            task_id += 1
        
        # Convert to list, sort by ID, and filter empty categories
        output = [cat for cat in sorted(categories.values(), key=lambda x: x['id']) if cat['tasks']]
        return output
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        import traceback
        traceback.print_exc()
        return None

def save_as_js(data, output_file):
    """Save data as JavaScript module"""
    
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write('// Auto-generated from 600-sheet CSV conversion\n')
            f.write('// All tasks and topics from the Striver A2Z DSA sheet\n\n')
            f.write('const tasksData = ')
            json.dump(data, f, indent=4, ensure_ascii=False)
            f.write(';\n')
        
        return True
    except Exception as e:
        print(f"❌ Error writing output: {str(e)}")
        return False

def main():
    """Main function"""
    
    input_file = '600-sheet - Sheet1.csv'
    output_file = 'data.js'
    
    print("📊 Converting 600-sheet CSV to DSA Tracker format...")
    print("-" * 60)
    
    # Convert CSV to JSON
    data = convert_csv_to_json(input_file)
    
    if data is None or len(data) == 0:
        print("❌ Error: No tasks found")
        return
    
    # Count totals
    total_tasks = sum(len(cat['tasks']) for cat in data)
    
    # Save to JavaScript file
    if save_as_js(data, output_file):
        print(f"\n✅ Conversion successful!")
        print(f"   Categories: {len(data)}")
        print(f"   Total Tasks: {total_tasks}")
        print(f"   Output: {output_file}")
        print("\n📋 Categories Found:")
        for cat in data:
            print(f"   • {cat['category']} ({len(cat['tasks'])} tasks) {cat['icon']}")
        
        print(f"\n✨ Next step: git add data.js && git commit -m 'Add 600 DSA tasks' && git push")
    else:
        print("❌ Failed to save output file")

if __name__ == '__main__':
    main()
