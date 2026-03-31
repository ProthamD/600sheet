/**
 * SPREADSHEET TO JSON CONVERSION GUIDE
 * 
 * This file shows you how to convert your Google Sheets data to the format needed for data.js
 */

// ============================================================================
// STEP 1: Export your Google Sheet as CSV
// ============================================================================
// 1. Open your Google Sheet
// 2. File > Download > Comma Separated Values (.csv)
// 3. Open the CSV in Excel or a text editor

// ============================================================================
// STEP 2: CSV FORMAT SHOULD LOOK LIKE THIS
// ============================================================================
/*
Category,Task Name,Difficulty,Problem Link,Description
Arrays,Two Sum,easy,https://leetcode.com/problems/two-sum/,Find two numbers that add up to target
Arrays,Best Time to Buy and Sell Stock,easy,https://leetcode.com/problems/best-time-to-buy-and-sell-stock/,Find max profit from buying and selling
Strings,Reverse String,easy,https://leetcode.com/problems/reverse-string/,Reverse a string
Strings,Longest Substring,medium,https://leetcode.com/problems/longest-substring-without-repeating-characters/,Find longest substring without repeating
Trees,Inorder Traversal,easy,https://leetcode.com/problems/binary-tree-inorder-traversal/,Perform inorder traversal
*/

// ============================================================================
// STEP 3: MANUAL CONVERSION (Quick way for small sheets)
// ============================================================================
// 1. Create categories grouping by "Category" column
// 2. For each task, create an object with: id, name, difficulty, link, description
// 3. Use unique incremental IDs starting from 1

// ============================================================================
// STEP 4: PYTHON SCRIPT TO AUTO-CONVERT (For large sheets)
// ============================================================================
/*
Save this as convert.py and run: python convert.py input.csv output.json

---BEGIN PYTHON SCRIPT---
import csv
import json

def csv_to_json(csv_file, json_file):
    categories = {}
    task_id = 1
    
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            category = row['Category']
            
            if category not in categories:
                icons = {
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
                }
                
                categories[category] = {
                    'id': len(categories) + 1,
                    'category': category,
                    'icon': icons.get(category, '📌'),
                    'tasks': []
                }
            
            task = {
                'id': task_id,
                'name': row['Task Name'],
                'difficulty': row['Difficulty'].lower(),
                'link': row['Problem Link'],
                'description': row['Description']
            }
            
            categories[category]['tasks'].append(task)
            task_id += 1
    
    output = list(categories.values())
    
    with open(json_file, 'w', encoding='utf-8') as f:
        f.write('const tasksData = ')
        json.dump(output, f, indent=4, ensure_ascii=False)
        f.write(';\n')
    
    print(f"✅ Converted {json_file}")
    print(f"   Categories: {len(categories)}")
    print(f"   Total Tasks: {task_id - 1}")

if __name__ == '__main__':
    csv_to_json('input.csv', 'data.js')
---END PYTHON SCRIPT---
*/

// ============================================================================
// STEP 5: EXPECTED JSON STRUCTURE
// ============================================================================
// After conversion, your data.js should have this structure:

const EXAMPLE_STRUCTURE = [
    {
        id: 1,                              // Category ID (unique)
        category: "Arrays",                 // Category name
        icon: "📚",                         // Category emoji
        tasks: [
            {
                id: 1,                      // Task ID (unique across all tasks)
                name: "Two Sum",            // Problem name
                difficulty: "easy",         // easy | medium | hard (lowercase)
                link: "https://...",        // Link to problem
                description: "Find..."      // Problem description
            },
            {
                id: 2,
                name: "Best Time to Buy...",
                difficulty: "easy",
                link: "https://...",
                description: "Find max..."
            }
        ]
    },
    {
        id: 2,
        category: "Strings",
        icon: "📝",
        tasks: [
            // ... more tasks
        ]
    }
];

// ============================================================================
// ICON SUGGESTIONS
// ============================================================================
const ICON_SUGGESTIONS = {
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
};

// ============================================================================
// VALIDATION CHECKLIST
// ============================================================================
/*
Before deploying, ensure:

✅ All task IDs are unique (1, 2, 3, 4, ...)
✅ All difficulties are lowercase: "easy", "medium", "hard"
✅ All links start with "http://" or "https://"
✅ All categories have at least one task
✅ No fields are left empty
✅ JSON syntax is valid (use https://jsonlint.com/ to check)
✅ No special characters that break JSON in descriptions
*/

// ============================================================================
// TEMPLATE TO COPY-PASTE
// ============================================================================
/*
Replace the tasksData in data.js with this template and fill in your data:

const tasksData = [
    {
        id: 1,
        category: "Your Category Name",
        icon: "📌",
        tasks: [
            {
                id: 1,
                name: "Problem Name",
                difficulty: "easy",
                link: "https://leetcode.com/problems/...",
                description: "Problem description here"
            },
            {
                id: 2,
                name: "Another Problem",
                difficulty: "medium",
                link: "https://leetcode.com/problems/...",
                description: "Another description"
            }
        ]
    },
    {
        id: 2,
        category: "Another Category",
        icon: "📌",
        tasks: [
            // Add more tasks...
        ]
    }
];
*/
