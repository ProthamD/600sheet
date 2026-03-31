#!/usr/bin/env python3
"""
CSV to JSON Converter for DSA Tracker
Converts Google Sheets CSV export to data.js format
"""

import csv
import json
import sys
import os

# Default icon mapping
DEFAULT_ICONS = {
    'Arrays': '📚',
    'Strings': '📝',
    'Linked Lists': '🔗',
    'Trees': '🌳',
    'Graphs': '🔀',
    'Dynamic Programming': '🎯',
    'Sorting': '🔀',
    'Searching': '🔍',
    'Hashing': '#️⃣',
    'Queues': '📦',
    'Stacks': '📚',
    'Heaps': '⛰️',
    'Tries': '🌲',
    'Matrix': '🔲',
    'Recursion': '🔁',
    'Backtracking': '⏪',
    'Two Pointers': '👉👈',
    'Sliding Window': '🪟',
    'Greedy': '🎁',
    'Math': '🧮',
}

def convert_csv_to_json(csv_file):
    """Convert CSV file to DSA Tracker JSON format"""
    
    categories = {}
    task_id = 1
    
    try:
        with open(csv_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            
            if not reader.fieldnames:
                print("❌ Error: CSV file is empty")
                return None
            
            required_fields = ['Category', 'Task Name', 'Difficulty', 'Problem Link', 'Description']
            missing_fields = [field for field in required_fields if field not in reader.fieldnames]
            
            if missing_fields:
                print(f"❌ Error: Missing columns: {', '.join(missing_fields)}")
                print(f"   Expected columns: {', '.join(required_fields)}")
                return None
            
            for row in reader:
                category = row['Category'].strip()
                task_name = row['Task Name'].strip()
                difficulty = row['Difficulty'].strip().lower()
                link = row['Problem Link'].strip()
                description = row['Description'].strip()
                
                # Validate row
                if not all([category, task_name, difficulty, link, description]):
                    print(f"⚠️  Warning: Skipping incomplete row: {task_name}")
                    continue
                
                if difficulty not in ['easy', 'medium', 'hard']:
                    print(f"⚠️  Warning: Invalid difficulty '{difficulty}' for '{task_name}', using 'easy'")
                    difficulty = 'easy'
                
                if not link.startswith(('http://', 'https://')):
                    print(f"⚠️  Warning: Invalid link for '{task_name}'")
                
                # Create category if not exists
                if category not in categories:
                    categories[category] = {
                        'id': len(categories) + 1,
                        'category': category,
                        'icon': DEFAULT_ICONS.get(category, '📌'),
                        'tasks': []
                    }
                
                # Add task
                task = {
                    'id': task_id,
                    'name': task_name,
                    'difficulty': difficulty,
                    'link': link,
                    'description': description
                }
                
                categories[category]['tasks'].append(task)
                task_id += 1
        
        # Convert to list and sort by category ID
        output = sorted(categories.values(), key=lambda x: x['id'])
        return output
        
    except FileNotFoundError:
        print(f"❌ Error: File '{csv_file}' not found")
        return None
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return None

def save_as_js(data, output_file):
    """Save data as JavaScript module"""
    
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write('// Auto-generated from CSV conversion\n')
            f.write('// Edit this file to update your DSA tasks\n')
            f.write('// Original data preserved from: ')
            f.write('Google Sheets\n\n')
            f.write('const tasksData = ')
            json.dump(data, f, indent=4, ensure_ascii=False)
            f.write(';\n')
        
        return True
    except Exception as e:
        print(f"❌ Error writing output: {str(e)}")
        return False

def main():
    """Main function"""
    
    if len(sys.argv) < 2:
        print("📊 CSV to JSON Converter for DSA Tracker")
        print("=" * 50)
        print("\nUsage: python converter.py <input.csv> [output.js]")
        print("\nExample:")
        print("  python converter.py tasks.csv data.js")
        print("\nIf output file is not specified, 'data.js' will be used")
        print("\nCSV Format (from Google Sheets):")
        print("  Category | Task Name | Difficulty | Problem Link | Description")
        print("  Arrays   | Two Sum   | Easy       | https://...  | Problem description")
        return
    
    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else 'data.js'
    
    print(f"📊 Converting {input_file}...")
    print("-" * 50)
    
    # Convert CSV to JSON
    data = convert_csv_to_json(input_file)
    
    if data is None:
        return
    
    if len(data) == 0:
        print("❌ Error: No valid tasks found in CSV")
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
    else:
        print("❌ Failed to save output file")

if __name__ == '__main__':
    main()
