class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }
    
    findCommonParent(val1, val2, parent = null) {
        if(this.value === val1 || this.value === val2) {
            return parent;
        }
        else if(this.value > val1 && this.value < val2 ||
            this.value > val1 && this.value < val2)
            return this.value;
            else if(this.value > val1 && this.leftChild) {
                return this.leftChild.findCommonParent(val1, val2, this.value);
            }
            else if(this.rightChild) {
                return this.rightChild.findCommonParent(val1, val2, this.value);
            }
            return null;
    }

    getNode(value) {
        if(this.value === value) {
            return this;
        }
        else if(this.value < value && this.rightChild) {
            return this.rightChild.findNode(value);
        }
        else if(this.leftChild) {
            return this.leftChild.findNode(value);
        }
        return null;
    }

    findNode(value) {
        return getNode(value) !== null;
    }

    max() {
        if(this.rightChild)
            return this.rightChild.max();
        else
            return this.value;
    }

    print() {
        let curr_nodes_level = [this];
        while(curr_nodes_level.length) {
            console.log(curr_nodes_level.map(node => node ? node.value : 'x'));
            let size = curr_nodes_level.length;
            while(size--) {
                if(curr_nodes_level[0])
                    curr_nodes_level.push(curr_nodes_level[0].leftChild);
                if(curr_nodes_level[0])
                    curr_nodes_level.push(curr_nodes_level[0].rightChild);
                curr_nodes_level.splice(0, 1);
            }
        }
    }

    removeNode(value) {
        if(this.value === value) {
            if(!this.leftChild && !this.rightChild)
                return null;
            else if(!this.leftChild)
                return this.rightChild;
            else if(!this.rightChild)
                return this.leftChild;
            else {
                this.value = this.leftChild.max();
                this.leftChild = this.leftChild.removeNode(this.value);
            }
        }
        else if(this.value > value) {
            this.leftChild = this.leftChild.removeNode(value);
        }
        else {
            this.rightChild = this.rightChild.removeNode(value);
        }
        return this;
    }

    replaceBottomRightWithNode(node, parent = null) {
        if(node.rightChild) {
            return node.replaceBottomRightWithNode(node.rightChild, node);
        }
        else if(node.leftChild) {
            return node.replaceBottomRightWithNode(node.leftChild, node);
        }
        else {
            return [node, parent];
        }
    }
}

module.exports = BSNode;