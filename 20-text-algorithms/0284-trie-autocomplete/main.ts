interface TrieNode {
  children: Map<string, TrieNode>;
  end: boolean;
}

function makeNode(): TrieNode {
  return { children: new Map(), end: false };
}

class Trie {
  private root = makeNode();

  insert(word: string): void {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, makeNode());
      node = node.children.get(ch)!;
    }
    node.end = true;
  }

  autocomplete(prefix: string): string[] {
    let node = this.root;
    for (const ch of prefix) {
      const next = node.children.get(ch);
      if (!next) return [];
      node = next;
    }
    const results: string[] = [];
    const dfs = (cur: TrieNode, path: string): void => {
      if (cur.end) results.push(path);
      for (const ch of [...cur.children.keys()].sort()) {
        dfs(cur.children.get(ch)!, path + ch);
      }
    };
    dfs(node, prefix);
    return results;
  }
}

const trie = new Trie();
for (const w of ["car", "card", "dog"]) trie.insert(w);
console.log(trie.autocomplete("car").join(" "));
