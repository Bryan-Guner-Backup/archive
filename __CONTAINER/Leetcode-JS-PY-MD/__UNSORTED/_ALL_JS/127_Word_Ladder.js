// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time
// Each intermediate word must exist in the word list
// For example,

// Given:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
// As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

// Note:
// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// Amazon LinkedIn Snapchat Facebook Yelp


// Leetcode 127
// Language: Javascript
// Problem: https://leetcode.com/problems/word-ladder/
// Author: Chihung Yu

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
 let ladderLength = function(beginWord, endWord, wordList) {
     let visited = new Set();
     let queue = [];
     let level = 1;
     let letters = 'abcdefghijklmnopqrstuvwxyz';
    queue.push(beginWord);
    visited.add(beginWord);    
    
    while(queue.length > 0) {
        
         let len = queue.length;
        
        for( let i = 0; i < len; i++) {
             let word = queue.shift();
            
            for( let j = 0; j < word.length; j++) {
                for( let k = 0; k < letters.length; k++) {
                     let newWord = word.substring(0, j) + letters[k] + word.substring(j + 1);
                    
                    if(newWord === endWord) {
                        return level + 1;
                    }
                    if(wordList.has(newWord) && !visited.has(newWord)) {
                        queue.push(newWord);
                        visited.add(newWord);
                    }
                }
            }
        }
        
        level++;
    }
    
    return 0;
};

// will time exceeded. javascript hash is slower than set
 let ladderLength = function(beginWord, endWord, wordList) {
    if(beginWord === endWord) {
        return 0;
    }
    
     let queue = [];
     let visited = {};
     let count = 1;
     let baseCharCode = 'a'.charCodeAt(0);
    
    queue.push(beginWord);
    
    while(queue.length) {
         let len = queue.length;
        
        for( let i = 0; i < len; i++) {
             let word = queue.shift();
            
            for( let j = 0; j < word.length; j++) {
                for( let k = 0; k < 26; k++) {
                     let newChar = String.fromCharCode(baseCharCode + k);
                     let newWord = word.substring(0, j) + newChar + word.substring(j + 1);
                    
                    if(newWord === endWord) {
                        return count + 1;
                    }
                    
                    if(!visited[newWord] && wordList.has(newWord)) {
                        visited[newWord] = true;
                        queue.push(newWord);
                    }
                }
            }    
        }
        
        count++;
    }
    
    return 0;
};




Hi Thiago

I very much appreciate that you took the time writing this warm welcoming letter and provided me the opportunity to come onsite visiting the team at Periscope.
After much thought, I've decided to accept offer at another company. It was really a tough call for me since I really like the product, role and people I met during my visit. 
Again, I cannot thank you enough for your time, and support. It's been a great pleasure to know you and the team. I hope that we cross paths in the near future.

Wish you, teams, and Periscope all the success.

Regards,
Jerry




Hi Cynthia

Thank your for patience and support along the way.
I very much appreciate that you took the time answering many of my questions about the Periscope, and role.

After much thought, I've decided to accept offer at another company. It was really a tough call for me since I really like the product and people I met during my visit.
 
Again, I cannot thank you enough for your time, and support. It's been a great pleasure to know you and the team. I hope that we cross paths in the near future.

Wish you, teams, and Periscope all the success.

Regards,
Jerry
