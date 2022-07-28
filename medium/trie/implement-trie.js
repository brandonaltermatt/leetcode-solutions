/* https://leetcode.com/problems/implement-trie-prefix-tree/
A trie (pronounced as "try") or prefix tree is a tree data structure
used to efficiently store and retrieve keys in a dataset of strings.
There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:
    Trie() Initializes the trie object.
    void insert(String word) Inserts the string word into the trie.
    boolean search(String word) Returns true if the string word
    is in the trie (i.e., was inserted before), and false otherwise.
    boolean startsWith(String prefix) Returns true if there is a
    previously inserted string word that has the prefix prefix, and false otherwise.
*/

/*
A Trie of strings consists of nodes of characters.
For basic English words, each node can have 0-26 children.
Inserting a word involves linking nodes of characters for the word.
Searching for a word involves traversing nodes of characters for the word.
A boolean value at a node for a character indicates whether a word ends at that character.
*/

const Trie = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!node[char]) node[char] = {};
    node = node[char];
  }

  node.isWordEnd = true;
};

/**
 * @param {string} word
 * @return {Object}
 */
Trie.prototype.traverse = function (word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    node = node[char];
    if (!node) return null;
  }

  return node;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const node = this.traverse(word);
  return (node !== null) && (node.isWordEnd === true);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this.traverse(prefix) !== null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
