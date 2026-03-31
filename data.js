// Sample DSA Task Data - Update this with your spreadsheet data
const tasksData = [
    {
        id: 1,
        category: "Arrays",
        icon: "📚",
        tasks: [
            {
                id: 1,
                name: "Two Sum",
                difficulty: "easy",
                link: "https://leetcode.com/problems/two-sum/",
                description: "Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target."
            },
            {
                id: 2,
                name: "Best Time to Buy and Sell Stock",
                difficulty: "easy",
                link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
                description: "Find the maximum profit you can achieve by buying and selling a stock once."
            },
            {
                id: 3,
                name: "Container With Most Water",
                difficulty: "medium",
                link: "https://leetcode.com/problems/container-with-most-water/",
                description: "Find two lines that together with the x-axis form a container with the maximum area."
            }
        ]
    },
    {
        id: 2,
        category: "Strings",
        icon: "📝",
        tasks: [
            {
                id: 4,
                name: "Reverse String",
                difficulty: "easy",
                link: "https://leetcode.com/problems/reverse-string/",
                description: "Write a function that reverses a string."
            },
            {
                id: 5,
                name: "Longest Substring Without Repeating Characters",
                difficulty: "medium",
                link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
                description: "Find the length of the longest substring without repeating characters."
            },
            {
                id: 6,
                name: "Regular Expression Matching",
                difficulty: "hard",
                link: "https://leetcode.com/problems/regular-expression-matching/",
                description: "Implement regular expression matching with '.' and '*' support."
            }
        ]
    },
    {
        id: 3,
        category: "Linked Lists",
        icon: "🔗",
        tasks: [
            {
                id: 7,
                name: "Reverse Linked List",
                difficulty: "easy",
                link: "https://leetcode.com/problems/reverse-linked-list/",
                description: "Reverse a singly linked list."
            },
            {
                id: 8,
                name: "Merge Two Sorted Lists",
                difficulty: "easy",
                link: "https://leetcode.com/problems/merge-two-sorted-lists/",
                description: "Merge two sorted linked lists into one sorted list."
            },
            {
                id: 9,
                name: "LRU Cache",
                difficulty: "hard",
                link: "https://leetcode.com/problems/lru-cache/",
                description: "Design and implement an LRU cache."
            }
        ]
    },
    {
        id: 4,
        category: "Trees",
        icon: "🌳",
        tasks: [
            {
                id: 10,
                name: "Inorder Traversal",
                difficulty: "easy",
                link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
                description: "Perform inorder traversal of a binary tree."
            },
            {
                id: 11,
                name: "Level Order Traversal",
                difficulty: "medium",
                link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
                description: "Return the level order traversal of a binary tree."
            },
            {
                id: 12,
                name: "Serialize and Deserialize Binary Tree",
                difficulty: "hard",
                link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
                description: "Serialize and deserialize a binary tree."
            }
        ]
    },
    {
        id: 5,
        category: "Graphs",
        icon: "🔀",
        tasks: [
            {
                id: 13,
                name: "Number of Islands",
                difficulty: "medium",
                link: "https://leetcode.com/problems/number-of-islands/",
                description: "Count the number of islands in a 2D grid."
            },
            {
                id: 14,
                name: "Course Schedule",
                difficulty: "medium",
                link: "https://leetcode.com/problems/course-schedule/",
                description: "Determine if it's possible to finish all courses given prerequisites."
            },
            {
                id: 15,
                name: "Network Delay Time",
                difficulty: "medium",
                link: "https://leetcode.com/problems/network-delay-time/",
                description: "Find the minimum time it takes for all nodes to receive a signal."
            }
        ]
    },
    {
        id: 6,
        category: "Dynamic Programming",
        icon: "🎯",
        tasks: [
            {
                id: 16,
                name: "Climbing Stairs",
                difficulty: "easy",
                link: "https://leetcode.com/problems/climbing-stairs/",
                description: "Count the number of ways to climb n stairs."
            },
            {
                id: 17,
                name: "House Robber",
                difficulty: "medium",
                link: "https://leetcode.com/problems/house-robber/",
                description: "Find the maximum amount of money you can rob."
            },
            {
                id: 18,
                name: "Edit Distance",
                difficulty: "hard",
                link: "https://leetcode.com/problems/edit-distance/",
                description: "Find the minimum number of operations to convert one string to another."
            }
        ]
    }
];
