class Tree {
   constructor(value) {
      this.value = value;
      this.nodes = [];
   }
   addNode(value) {
      const child = new Tree(value);
      this.nodes.push(child);
   }
   contains(value) {
      if (this.value === value) {
         return true;
      }
      for (let i = 0; i < this.nodes.length; i++) {
         const child = this.nodes[i];
         if (child.contains(value)) {
            return true;
         }
      }
      return false;
   }
}
