class Tree {
   constructor(value) {
      this.id_tree = value.id_tree;
      this.name = value.name;
      this.description = value.description;
      this.access = value.access;
      this.nodes = [];
   }

   addNode(value) {
      this.nodes.push(value);
      return true;
   }

   removeNode(value) {
      let index = this.nodes.indexOf(value);
      if (index > -1) {
         this.nodes.splice(index, 1);
         return true;
      }
      return false;
   }

   getNodes() {
      return this.nodes;
   }

   getNode(id_node) {
      // do it with .find()
      const node = this.nodes.find((node) => node.id_node === id_node);

      if (!node) false;

      return node;
   }

   update(value) {
      this.name = value.name;
      this.description = value.description;
      this.access = value.access;
   }
}

class Node {
   constructor(value) {
      this.id_node = value.id_node;
      this.title = value.title;
      this.description = value.description;
      this.root = value.root;
      this.question = value.question;
      this.result = value.result; //processing, success, failure
      this.options = [];
   }

   addOption(value) {
      this.options.push(value);
      return true;
   }

   removeOption(value) {
      let index = this.options.indexOf(value);
      if (index > -1) {
         this.options.splice(index, 1);
         return true;
      }
      return false;
   }

   update(value) {
      this.title = value.title;
      this.description = value.description;
      this.root = value.root;
      this.question = value.question;
      this.result = value.result; //processing, success, failure
   }
}

class Option {
   constructor(value) {
      this.id_option = value.id_option;
      this.ref_node = value.ref_node;
      this.text = value.text;
      this.next_node = value.next_node; // id_node
   }

   update(value) {
      this.text = value.text;
      this.next_node = value.next_node;
   }

   setNextNodeId(value) {
      this.next_node = value;
   }

   getNextNodeId() {
      return this.next_node;
   }
}
