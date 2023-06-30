#include<iostream>
#include<queue>
#include<stack>
#include<math.h>
using namespace std;

// When we traverse a tree using recursion, it is depth first search(DFS)
// And when we traverse level wise, it is breadth first search(BFS)

// Binary Tree Node class
class BinaryNode{
    public:
        int data;

        BinaryNode* left ;
        BinaryNode* right;

        BinaryNode(int data) {
            this -> left = NULL;
            this -> right = NULL;
        }
};

// Count All Binary Tree Nodes
int countBinaryTreeNodes(BinaryNode* root) {
    if(root == NULL) {
        return 0;
    }
    return 1 + countBinaryTreeNodes(root -> left) + countBinaryTreeNodes(root -> right);
}

// Count Binary Tree Leaf Nodes, those that don't have any children
int countBinaryTreeLeafNodes(BinaryNode* root) {
    if(root == NULL) {
        return 0;
    }
    if(root -> left == NULL && root -> right == NULL) {
        cout << root -> data << " ";
        return 1;
    }
    return countBinaryTreeLeafNodes(root -> left) + countBinaryTreeLeafNodes(root -> right);
}

// Print Binary Tree Nodes in level wise fashion
void printBinaryTreeNodesLevelWise(queue<BinaryNode*>& q1) {
    if(q1.size() <= 0) {
        return;
    }
    int n = q1.size();
    for(int i = 0; i < n; i++) {
        BinaryNode *root = q1.front();
        cout << root -> data << " ";
        q1.pop();
        if(root -> left) {
            q1.push(root -> left);
        }
        if(root -> left) {
            q1.push(root -> right);
        }
    }
    printBinaryTreeNodesLevelWise(q1);
}

// Print Binary Tree Nodes in zig zag fashion
void printBinaryTreeNodesZigZag(stack<BinaryNode*> s1) {
    if(s1.size() <= 0) {
        return;
    }
    int n = s1.size();
    for(int i = 0; i < n; i++) {
        BinaryNode *root = s1.top();
        cout << root -> data << " ";
        s1.pop();
        if(root -> left) {
            s1.push(root -> left);
        }
        if(root -> right) {
            s1.push(root -> right);
        }
    }
    printBinaryTreeNodesZigZag(s1);
}

// L R (S) - Print self after printing left and right trees
void printPostOrderTraversal(BinaryNode* root) {
    if(root == NULL) {
        return;
    }
    printPostOrderTraversal(root -> left);
    printPostOrderTraversal(root -> right);
    cout << root -> data << " ";
}

// L(S)R - Print self after printing left and before right trees
void printPostOrderTraversal(BinaryNode* root) {
    if(root == NULL) {
        return;
    }
    printPostOrderTraversal(root -> left);
    cout << root -> data << " ";
    printPostOrderTraversal(root -> right);
}

// (S) L R - Print self before printing left and right trees
void printPostOrderTraversal(BinaryNode* root) {
    if(root == NULL) {
        return;
    }
    cout << root -> data << " ";
    printPostOrderTraversal(root -> left);
    printPostOrderTraversal(root -> right);
}

// Print Binary Tree Top view.
// We can use arrays to keep check on which indices have been printed.
// But the issue will be that due to recursion, all nodes on the left will be traversed first, and so
// the nodes on the right that shadow the ones on the left will be called only later.
// But in the arrays, indices for the nodes on the right would've been filled already.
// Thus we'll have to traverse the tree level wise.
void printBinaryTreeTopView(BinaryNode* root) {
    queue<BinaryNode*> q1;
    queue<int> indices;
    indices.push(0);
    q1.push(root);

    vector<int> vRight(100, -1);
    vector<int> vLeft(100, -1);

    while(q1.size() > 0) {
        int index = indices.front();
        BinaryNode* node = q1.front();
        if(node == NULL) {
            q1.pop();
            indices.pop();
            continue;
        }

        // If index >= 0, check right vector.
        // If element present at index, can't print another element at same index.
        // Otherwise print, and put the new element at that index in the vector.
        if(index >= 0) {
            if(vRight[index] != -1) {
                cout << node -> data << " ";
                vRight[index] = node -> data;
            }
        }

        // If index < 0, check left vector.
        if(index < 0) {
            if(vLeft[abs(index)] != -1) {
                cout << node -> data << " ";
                vLeft[abs(index)] = node -> data;
            }
        }

        q1.push(node -> left);
        q1.push(node -> right);
        q1.pop();

        indices.push(index - 1);
        indices.push(index + 1);
        indices.pop();
    }
}

// Print Bottom view
void printBinaryTreeBottomView(BinaryNode* root) {
    queue<BinaryNode*> q1;
    queue<int> indices;
    indices.push(0);
    q1.push(root);

    vector<int> vRight(100, -1);
    vector<int> vLeft(100, -1);

    while(q1.size() > 0) {
        int index = indices.front();
        BinaryNode* node = q1.front();
        if(node == NULL) {
            q1.pop();
            indices.pop();
            continue;
        }

        // If index >= 0, check right vector.
        // If element present at index, still overwrite that index.
        // Because we want the bottom most element, which is the last element at that index.
        if(index >= 0) {
            
            // cout << node -> data << " ";
            vRight[index] = node -> data;
            
        }

        // If index < 0, check left vector.
        if(index < 0) {
            
                // cout << node -> data << " ";
                vLeft[abs(index)] = node -> data;
            
        }

        q1.push(node -> left);
        q1.push(node -> right);
        q1.pop();

        indices.push(index - 1);
        indices.push(index + 1);
        indices.pop();
    }

    for(int i = 0; i < vRight.size(); i++) {

    }
}

// Mirror binary tree - swap left and right nodes for each node
void mirrorBinaryTree(BinaryNode* root) {
    if(root == NULL) {
        return;
    }
    BinaryNode* temp = root -> left;
    root -> left = root -> right;
    root -> right = temp;
    mirrorBinaryTree(root -> left);
    mirrorBinaryTree(root -> right);
}

// Height of Binary tree - level wise approach
int heightOfBinaryTree(queue<BinaryNode*> q1) {
    if(q1.size() == 0) {
        return 0;
    }
    int n = q1.size();
    for(int i = 0; i < n; i++) {
        BinaryNode *root = q1.front();
        q1.pop();
        if(root -> left) {
            q1.push(root -> left);
        }
        if(root -> right) {
            q1.push(root -> right);
        }
    }
    return 1 + heightOfBinaryTree(q1);
}

int heightOfBinaryTree2(BinaryNode* root) {
    if(root == NULL) {
        return 0;
    }
    int height1 = heightOfBinaryTree2(root -> left);
    int height2 = heightOfBinaryTree2(root -> right);
    return 1 + max(height1, height2);
}

// Print Left view - print node that is on the left most, at the same depth
void printBinaryTreeLeftView(BinaryNode* root) {

}

