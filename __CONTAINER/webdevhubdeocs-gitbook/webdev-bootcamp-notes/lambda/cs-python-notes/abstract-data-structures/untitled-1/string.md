# String

## String

- Output list of strings representing a page of hostings given a list of CSV strings.
- Given a list of words, find the word pairs that when concatenated form a palindrome.
- Find the most efficient way to identify what character is out of place in a non-palindrome.
- Implement a simple regex parser which, given a string and a pattern, returns a boolean indicating whether the input matches the pattern. By simple, we mean that the regex can only contain the following special characters: `*` \(star\), `.` \(dot\), `+` \(plus\). The star means that there will be zero or more of the previous character in that place in the pattern. The dot means any character for that position. The plus means one or more of previous character in that place in the pattern.
- Find all words from a dictionary that are x edit distance away.
- Given a string IP and number n, print all CIDR addresses that cover that range.
- Write a function called `eval`, which takes a string and returns a boolean. This string is allowed 6 different characters: `0`, `1`, `&`, `|`, `(`, and `)`. `eval` should evaluate the string as a boolean expression, where `0` is `false`, `1` is `true`, `&` is an `and`, and `|` is an `or`.
  - E.g `"(0 | (1 | 0)) & (1 & ((1 | 0) & 0))"`
- Given a pattern string like `"abba"` and an input string like `"redbluebluered"`, return `true` if and only if there's a one to one mapping of letters in the pattern to substrings of the input.
  - E.g. `"abba"` and `"redbluebluered"` should return `true`.
  - E.g. `"aaaa"` and `"asdasdasdasd"` should return `true`.
  - E.g. `"aabb"` and `"xyzabcxzyabc"` should return `false`.
- If you received a file in chunks, calculate when you have the full file. Quite an open-ended question. Can assume chunks come with start and end, or size, etc.
- Given a list of names \(strings\) and the width of a line, design an algorithm to display them using the minimum number of lines.
- Design a spell-checking algorithm.
- Count and say problem.
- Longest substring with `K` unique characters.
  - [Source](http://blog.gainlo.co/index.php/2016/04/12/find-the-longest-substring-with-k-unique-characters/)
- Given a set of random strings, write a function that returns a set that groups all the anagrams together.
  - [Source](http://blog.gainlo.co/index.php/2016/05/06/group-anagrams/)
- Given a string, find the longest substring without repeating characters. For example, for string `'abccdefgh'`, the longest substring is `'cdefgh'`.
  - [Source](http://blog.gainlo.co/index.php/2016/10/07/facebook-interview-longest-substring-without-repeating-characters/)
- Given a string, return the string with duplicate characters removed.
- Write a function that receives a regular expression \(allowed chars = from `'a'` to `'z'`, `'*'`, `'.'`\) and a string containing lower case english alphabet characters and return `true` or `false` whether the string matches the regex.
  - E.g. `'ab*a'`, `'abbbbba'` =&gt; `true`.
  - E.g. `'ab*b.'`, `'aba'` =&gt; `true`.
  - E.g. `'abc*'`, `'acccc'` =&gt; `false`.
- Given a rectangular grid with letters, search if some word is in the grid.
- Given two strings representing integer numbers \(`'123'` , `'30'`\) return a string representing the sum of the two numbers: `'153'`.
- A professor wants to see if two students have cheated when writing a paper. Design a function `hasCheated(String s1, String s2, int N)` that evaluates to `true` if two strings have a common substring of length `N`.
  - Follow up: Assume you don't have the possibility of using `String.contains()` and `String.substring()`. How would you implement this?
- Print all permutations of a given string.
- Parse a string containing numbers and `'+'`, `'-'` and parentheses. Evaluate the expression. `-2+(3-5)` should return `-4`.
- Output a substring with at most `K` unique characters.
  - E.g. `'aabc'` and `k` = 2 =&gt; `'aab'`.
- Ensure that there are a minimum of `N` dashes between any two of the same characters of a string.
  - E.g. `n = 2, string = 'ab-bcdecca'` =&gt; `'ab--bcdec--ca'`.
- Find the longest palindrome in a string.
- Give the count and the number following in the series.
  - E.g. `1122344`, next: `21221324`, next: `12112211121214`.
  - Count and say problem.
- Compress a string by grouping consecutive similar questions together:
  - E.g. `'aaabbbcc' =>` 'a3b3c2'\`.
- You have a string consisting of open and closed parentheses, but parentheses may be imbalanced. Make the parentheses balanced and return the new string.
- Given a set of strings, return the smallest subset that contains prefixes for every string.
  - E.g. `['foo', 'foog', 'food', 'asdf']` =&gt; `['foo', 'asdf']`.
- Write a function that would return all the possible words generated when using a phone \(pre-smartphone era\) numpad to type.
- Given a dictionary and a word, find the minimum number of deletions needed on the word in order to make it a valid word.
  - [Source](http://blog.gainlo.co/index.php/2016/04/29/minimum-number-of-deletions-of-a-string/)
- How to check if a string contains an anagram of another string?
  - [Source](http://blog.gainlo.co/index.php/2016/04/08/if-a-string-contains-an-anagram-of-another-string/)
- Find all k-lettered words from a string.
- Given a string of open and close parentheses, find the minimum number of edits needed to balance a string of parentheses.
- Run length encoding - Write a string compress function that returns `'R2G1B1'` given `'RRGB'`.
- Write a function that finds all the different ways you can split up a word into a concatenation of two other words.

{% page-ref page="array/" %}

{% page-ref page="binary-search-tree/" %}

{% page-ref page="untitled-4/" %}

{% page-ref page="array/extra-array.md" %}

{% page-ref page="stack/" %}

{% page-ref page="binary-tree/" %}

{% page-ref page="untitled-6/" %}

{% page-ref page="untitled-5/" %}

{% page-ref page="untitled-2/" %}

{% page-ref page="untitled-3/" %}

{% page-ref page="queue/queue-sandbox.md" %}

{% page-ref page="untitled-5/" %}

{% page-ref page="untitled-4/double-linked-list.md" %}

{% page-ref page="untitled-1/" %}

{% page-ref page="untitled/" %}

{% page-ref page="heap/" %}
