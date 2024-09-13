export default class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    addInBeginning(data) {
        //Denne linje opretter en ny node. den indeholder data, samt en pointer som peger på det nuværende første node
        const newNode = new Node(data, this.head);
        //Denne linje siger at this.head (som blot er en reference) skal pege på noden newNode, i stedet for den "gamle" første node
        this.head = newNode;
    }

    getFirstNode() {
        //Returnere node som this.head peger på, hvilket altid vil være den første
        return this.head;
    }

    getLastNode() {
        //Hvis this.head peger på null, betyder det at listen er tom, da this.head altid peger på det første element
        if (!this.head) {
            console.log('the list is empty');
            return null;
        }
        //Vi sætter this.head til at pege på variablen "node"
        let node = this.head;
        //Hvis den nuværende node peger på en anden node, så sæt den næste node til at være den nuværende node.
        //Det opdaterer både node variablen, og itererer gennem listen
        while (node.next) {
            node = node.next;
        }
        //Når while loopet er false, brder vi ud og returnerer node
        return node;
    }

    getNextNode(node) {
        return node.next;
    }

    getNodeWithData(data) {
        //Hvis this.head er false så er listen tom, og skal returnere null
        if (!this.head) return null;

        //Sætter node til at være den første node i listen
        let node = this.head;
        //Looper mens der stadig findes en node
        while (node) {
            //Ved et match mellem data returneres noden eller finder vi den næste node i rækken og looper igen.
            if (node.data === data) {
                console.log(`noden med data: ${data} er ${node}`);
                return node;
            } else {
                node = node.next;
            }
        }
        //findes der intet match i loopet, betyder det at noden slet ikke findes i listen
        console.log(`noden med data: ${data} findes ikke`);
        return null;
    }
    removeFirstNode() {
        if (this.head != null) {
            this.head = this.head.next;
        } else {
            console.log('No list exists');
        }
    }

    removeLastNode() {
        let node = this.head;
        if (!node) {
            console.log('List is empty');
            return;
        }
        if (node.next) {
            while (node.next.next) {
                node = node.next;
            }
            node.next = null;
        } else {
            this.head = null;
        }
        console.log('Last node deleted');
    }

    removeNode(nodeToRemove) {
        let node = this.head;
        if (!node) {
            console.log('List is empty');
            return;
        }
        if (this.head == nodeToRemove) {
            this.head = this.head.next;
            console.log('Deleted the head');
            return;
        }

        while (node.next && node.next != nodeToRemove) {
            node = node.next;
        }
        if (node.next === nodeToRemove) {
            node.next = node.next.next;
        } else {
            console.log("Node doesn't exist");
        }
        console.log('Node deleted');
    }

    remove(data) {
        let node = this.getNodeWith(data);
        this.removeNode(node);
    }

    dumpList() {
        let node = this.head;

        while (node) {
            console.log('Node: ', node);
            node = node.next;
        }

        return node;
    }

    size() {
        let node = this.head;
        let count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
}

class Node {
    constructor(data, pointer) {
        this.data = data;
        this.next = pointer;
    }
}
