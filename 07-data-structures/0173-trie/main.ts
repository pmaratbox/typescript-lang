class TrieNode {
  children = new Map<string, TrieNode>();
  end = false;
}

class Trie {
  private root = new TrieNode();

  insert(word: string): void {
    let node = this.root;
    for (const ch of word) {
      let next = node.children.get(ch);
      if (next === undefined) {
        next = new TrieNode();
        node.children.set(ch, next);
      }
      node = next;
    }
    node.end = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (const ch of word) {
      const next = node.children.get(ch);
      if (next === undefined) return false;
      node = next;
    }
    return node.end;
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("car");
const yes = trie.search("car") ? "yes" : "no";
const no = trie.search("can") ? "yes" : "no";
console.log(`${yes} ${no}`);
