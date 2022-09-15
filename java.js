

//Q1:

function push(new_data)
{

    var new_node = new Node(new_data);
 
    new_node.next = head;
    head = new_node;
}

//Q2:

class SLL{
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function insertToTail(head, data) {
    let newNode = new SLL(data)
    if (!head) {
        head = newNode 
        return head
    }
    let current  = head
    while (current.next) {
        current = current.next
    }
    current.next = newNode
    return head
}





//Q3:

 

      class Node {
         constructor() {
             this.data = 0;
             this.next = null;
         }
     }
      
   
     function counter(head)
     {
         let count = 0;
         while (head != null) {
             head = head.next;
             count+=1;
         }
         return count;
     }
  
     
     function deletemidnode(head)
     {
         
         if (head == null)
             return null;
         if (head.next == null) {
             return null;
         }
         var copyHead = head;
  
         var count = counter(head);
  
         var mid = parseInt(count / 2);
  
         while (mid-- > 1) {
             head = head.next;
         }
  
         head.next = head.next.next;
  
         return copyHead;
     }
  
    
     function printList( ptr) {
         while (ptr != null) {
             document.write(ptr.data + "->");
             ptr = ptr.next;
         }
         document.write("NULL<br/>");
     }
  
     
     function newNode(data) {
          temp = new Node();
         temp.data = data;
         temp.next = null;
         return temp;
     }
  
 
      
         
          head = newNode(1);
         head.next = newNode(2);
         head.next.next = newNode(3);
         printList(head);
  
         head = deleteMid(head);
  
         
         
         printList(head);
  

  
//Q4:


 class Node {
        
  
            constructor(val) {
                this.data = val;
                  
                this.nextNode = null;
            }
        }
       
  
    function GetNode(data) {
        return new Node(data);
    }
  
   
    function InsertPos( headNode , position , data) {
         head = headNode;
        if (position < 1)
            document.write("error");
        if (position == 1) {
             newNode = new Node(data);
            newNode.nextNode = headNode;
            head = newNode;
        } 
        else
        {
            while (position-- != 0)
            {
                if (position == 1)
                {
                     newNode = GetNode(data);
                    newNode.nextNode = headNode.nextNode;
                    headNode.nextNode = newNode;
                    break;
                }
                headNode = headNode.nextNode;
            }
            if (position != 1)
                document.write("error");
        }
        return head;
    }
  
    function PrintList( node) {
        while (node != null) {
            document.write(node.data);
            node = node.nextNode;
            if (node != null)
                document.write(",");
        }
        
    }
  
    // Driver code
      
         head = GetNode(3);
        head.nextNode = GetNode(5);
        head.nextNode.nextNode = GetNode(8);
        head.nextNode.nextNode.nextNode = GetNode(10);
  
        PrintList(head);
  
        var data = 12, pos = 3;
        head = Insert(head, pos, data);
        PrintList(head);
  
        data = 1;
        pos = 1;
        head = Insert(head, pos, data);
        PrintList(head);
  
        data = 15;
        pos = 7;
        head = Insert(head, pos, data);
        PrintList(head);
  

