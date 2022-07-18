// function arrSum(){
//     console.log('====================================Question 2==================================');
//     let arr=[1,2,3,8,9,29];
//     let sum=0;
//     for(let i=0;i<arr.length-1;i++){
//         sum+=arr[i];
//     }
//     console.log(sum);
// }

// function pallindrome()
// {
//     console.log('====================================Question 4==================================');
//     let num=2012;
//     function reverse()
//     {
//         let reversedNum=0;
//         while(num>0)
//         {
//             rem=num%10;
//             reversedNum=reversedNum*10+rem;  
//             num=Math.floor(num/10);
//         }
//         return reversedNum;
//     }
//     if(num===reverse()){
//         console.log("pallindrome");
//     }
//     else
//     {
//         console.log("not pallindrome");
//     }


//     function reversed()
//     {
//         let reversedNum=0;
//         while(num>0)
//         {
//             rem=num%10;
//             reversedNum=reversedNum*10+rem;  
//             num=Math.floor(num/10);
//         }
//         return reversedNum;
//     }
    
// };

// function insertionSort(arr, compare = defaultCompare) {
//     const { length } = arr;
//     let temp;
//     for (let i = 1; i < length; i++) {
//         let j = i;
//         temp = arr[i];
//         while (j > 0 && compare(arr[j - 1], temp) === Compare.BIGGER_THAN) {
//             arr[j] = arr[j - 1];
//             j--;
//         }
//         arr[j] = temp;
//     }
//     return arr;
// }
// function swap(arr, a, b) {
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }

// function bubbleSort(arr, compare = defaultCompare) {
//     const { length } = arr;
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - 1 - i; j++) { // refer to note below
//             if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
//                 swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }

// function insertionSort(arr, compare = defaultCompare) {
//     const { length } = arr;
//     let temp;
//     for (let i = 1; i < length; i++) {
//         let j = i;
//         temp = arr[i];
//         while (j > 0 && compare(arr[j - 1], temp) === Compare.BIGGER_THAN) {
//             arr[j] = arr[j - 1];
//             j--;
//         }
//         arr[j] = temp;
//     }
//     return arr;
// }
// Search...

// Log in
// Create account

// 42

// 10

// 94

// Cover image for Common Sorting Algorithms in JavaScript
// Christina
// Christina
// Posted on 7 Aug 2020 • Updated on 17 Aug 2020

// Common Sorting Algorithms in JavaScript
// #
// javascript
// #
// beginners
// #
// webdev
// #
// algorithms
// In this article, I will cover some common sorting algorithms in computer science. Sorting algorithms are important to study because they can often reduce the complexity of a problem. They also have direct applications in searching algorithms, database algorithms, and much more.

// Sorting algorithms we will learn about:

// Bubble Sort
// Selection Sort
// Insertion Sort
// Merge Sort
// Quick Sort
// Bucket Sort
// Helper Methods for Swapping and Comparing
// We will be swapping elements in arrays a lot so let's start by writing a helper method called swap:
// function swap(arr, a, b) {
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }
// We will be comparing elements a lot so I think it's a good idea to write a function for just that:
// const Compare = {
//     LESS_THAN: -1,
//     BIGGER_THAN: 1
// };

// function defaultCompare(a, b) {
//     if (a === b) {
//         return 0;
//     }
//     return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
// }
// Okay, now that that's settled, let's move onto sorting!

// Bubble Sort
// Best: O(N), Worst: O(N^2)
// gif of bubble sort

// The bubble sort is a good starting point since it is one of the simplest sorting algorithms. It's mostly just good for teaching purposes though since it is one of the slowest sorting algorithms.

// In short, the bubble sort algorithm compares every two adjacent values and swaps them if the first one is bigger than the second one. This reflects its name since the values tend to move up into the correct order, like bubbles rising to the surface.

// gif of swapping process in bubble sort
// function bubbleSort(arr, compare = defaultCompare) {
//     const { length } = arr;
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - 1 - i; j++) { // refer to note below
//             if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
//                 swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }
// Note that the solution I provided is a slightly improved version of the usual bubble sort algorithm since we are subtracting the number of passes from the inner loop to avoid unnecessary comparisons. To get a better understanding of what's actually happening, here is a diagram with an example:

// bubble sort step-by-step example

// Selection Sort
// Best/Worst: O(N^2)
// gif of selection sort

// The basic idea behind the selection sort algorithm is that is finds the minimum value in the data structure, places it in the first position, finds the second minimum value, places it in the second position, and so on.

// gif of selection sort process
// function selectionSort(arr, compare = defaultCompare) {
//     const { length } = arr;
//     let minIndex;
//     for (let i = 0; i < length - 1; i++) {
//         minIndex = i;
//         for (let j = i; j < length; j++) {
//             if (compare(arr[minIndex], arr[j]) === Compare.BIGGER_THAN) {
//                 minIndex = j;
//             }
//         }
//         if (i !== minIndex) {
//             swap(arr, i, minIndex);
//         }
//     }
//     return arr;
// }
// The following diagram acts as an example of the selection sort algorithm in action:

// selection sort step-by-step example

// Insertion Sort
// Best: O(N), Worst: O(N^2)
// gif of insertion sort

// The insertion sort algorithm builds the final sorted array one value at a time. The process looks something like this:

// Assume the first element is already sorted.
// Compare the first and second elements - should the second value stay in its place or be inserted before the first value?
// Next, you can do a similar comparison with the third value - should it be inserted in the first, second, or third position? And so on...
// gif of insertion sort process
// function insertionSort(arr, compare = defaultCompare) {
//     const { length } = arr;
//     let temp;
//     for (let i = 1; i < length; i++) {
//         let j = i;
//         temp = arr[i];
//         while (j > 0 && compare(arr[j - 1], temp) === Compare.BIGGER_THAN) {
//             arr[j] = arr[j - 1];
//             j--;
//         }
//         arr[j] = temp;
//     }
//     return arr;
// }
// Refer to this diagram for an example of insertion sort in action:

// insertion sort step-by-step example

// The insertion sort algorithm has a better performance than the selection and bubble sort algorithms when sorting small arrays though again, I wouldn't really recommend using it outside educational purposes.

// Merge Sort
// Best/Worst: O(N Log N)
// gif of merge sort

// The merge sort algorithm is a divide-and-conquer algorithm. In other words, it divides the original array into smaller arrays until each small array has only one position, then it merges the smaller arrays into a bigger one that is sorted.

// gif of merge sort process

// The implementation here is recursive and consists of two functions, one to divide the arrays into smaller ones and one to perform the sort:
// function mergeSort(arr, compare = defaultCompare) {
//     if (arr.length > 1) {
//         const { length } = arr;
//         const middle = Math.floor(length / 2);
//         const left = mergeSort(arr.slice(0, middle), compare);
//         const right = mergeSort(arr.slice(middle, length), compare);
//         arr = merge(left, right, compare);
//     }
//     return arr;
// }

// function merge(left, right, compare) {
//     let i = 0;
//     Search...

// Log in
// Create account

// 42

// 10

// 94

// Cover image for Common Sorting Algorithms in JavaScript
// Christina
// Christina
// Posted on 7 Aug 2020 • Updated on 17 Aug 2020

// Common Sorting Algorithms in JavaScript
// #
// javascript
// #
// beginners
// #
// webdev
// #
// algorithms
In this article, I will cover some common sorting algorithms in computer science. Sorting algorithms are important to study because they can often reduce the complexity of a problem. They also have direct applications in searching algorithms, database algorithms, and much more.

Sorting algorithms we will learn about:

Bubble Sort
Selection Sort
Insertion Sort
Merge Sort
Quick Sort
Bucket Sort
Helper Methods for Swapping and Comparing
We will be swapping elements in arrays a lot so let's start by writing a helper method called swap:
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
We will be comparing elements a lot so I think it's a good idea to write a function for just that:
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
Okay, now that that's settled, let's move onto sorting!

Bubble Sort
Best: O(N), Worst: O(N^2)
gif of bubble sort

The bubble sort is a good starting point since it is one of the simplest sorting algorithms. It's mostly just good for teaching purposes though since it is one of the slowest sorting algorithms.

In short, the bubble sort algorithm compares every two adjacent values and swaps them if the first one is bigger than the second one. This reflects its name since the values tend to move up into the correct order, like bubbles rising to the surface.

gif of swapping process in bubble sort
function bubbleSort(arr, compare = defaultCompare) {
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) { // refer to note below
            if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}
// Note that the solution I provided is a slightly improved version of the usual bubble sort algorithm since we are subtracting the number of passes from the inner loop to avoid unnecessary comparisons. To get a better understanding of what's actually happening, here is a diagram with an example:

// bubble sort step-by-step example

// Selection Sort
// Best/Worst: O(N^2)
// gif of selection sort

// The basic idea behind the selection sort algorithm is that is finds the minimum value in the data structure, places it in the first position, finds the second minimum value, places it in the second position, and so on.

// gif of selection sort process
// function selectionSort(arr, compare = defaultCompare) {
//     const { length } = arr;
//     let minIndex;
//     for (let i = 0; i < length - 1; i++) {
//         minIndex = i;
//         for (let j = i; j < length; j++) {
//             if (compare(arr[minIndex], arr[j]) === Compare.BIGGER_THAN) {
//                 minIndex = j;
//             }
//         }
//         if (i !== minIndex) {
//             swap(arr, i, minIndex);
//         }
//     }
//     return arr;
// }
// The following diagram acts as an example of the selection sort algorithm in action:

// selection sort step-by-step example

// Insertion Sort
// Best: O(N), Worst: O(N^2)
// gif of insertion sort

// The insertion sort algorithm builds the final sorted array one value at a time. The process looks something like this:

// Assume the first element is already sorted.
// Compare the first and second elements - should the second value stay in its place or be inserted before the first value?
// Next, you can do a similar comparison with the third value - should it be inserted in the first, second, or third position? And so on...
// gif of insertion sort process
// function insertionSort(arr, compare = defaultCompare) {
//     const { length } = arr;
//     let temp;
//     for (let i = 1; i < length; i++) {
//         let j = i;
//         temp = arr[i];
//         while (j > 0 && compare(arr[j - 1], temp) === Compare.BIGGER_THAN) {
//             arr[j] = arr[j - 1];
//             j--;
//         }
//         arr[j] = temp;
//     }
//     return arr;
// }
// Refer to this diagram for an example of insertion sort in action:

// insertion sort step-by-step example

// The insertion sort algorithm has a better performance than the selection and bubble sort algorithms when sorting small arrays though again, I wouldn't really recommend using it outside educational purposes.

// Merge Sort
// Best/Worst: O(N Log N)
// gif of merge sort

// The merge sort algorithm is a divide-and-conquer algorithm. In other words, it divides the original array into smaller arrays until each small array has only one position, then it merges the smaller arrays into a bigger one that is sorted.

// gif of merge sort process

// The implementation here is recursive and consists of two functions, one to divide the arrays into smaller ones and one to perform the sort:
function mergeSort(arr, compare = defaultCompare) {
    if (arr.length > 1) {
        const { length } = arr;
        const middle = Math.floor(length / 2);
        const left = mergeSort(arr.slice(0, middle), compare);
        const right = mergeSort(arr.slice(middle, length), compare);
        arr = merge(left, right, compare);
    }
    return arr;
}

function merge(left, right, compare) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        result.push(compare(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        result.push(compare(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}