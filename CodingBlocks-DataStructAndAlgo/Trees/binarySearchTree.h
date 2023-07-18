#include<iostream>
#include<queue>
#include<stack>
#include<math.h>
#include "binaryTree.h"
using namespace std;

// In BST, each node's left child is smaller and right one is larger than the parent.
// In-order traversal of BST basically prints out the elements of BST in sorted order.

// Write code for insertion and deletion

// Check if Binary Tree is BST
// My approach - 74/82 cases passing

bool checkIfBst(BinaryNode* root, int uBound = INT_MAX, int lBound = INT_MIN) {
    if(root == NULL) {
        return true;
    }
    if(!(root -> data < uBound && root -> data > lBound)) {
        return false;
    }
    return checkIfBst(root -> left, root -> data, lBound) && checkIfBst(root -> right, uBound, root -> data);
}

// Another approach using in-order
    vector<int> v1;
    bool isValidBST(BinaryNode* root) {
        // return checkIfBst(root);
        helper(root);
        bool ans = true;
        for(int i = 0; i < v1.size() - 1; i++) {
            if(v1[i] < v1[i + 1]) {
                continue;
            } else {
                ans = false;
                break;
            }
        }
        return ans;
    }

    void helper(BinaryNode* root) {
        if(root == NULL) {
            return;
        }
        helper(root -> left);
        v1.push_back(root -> data);
        helper(root -> right);
    }

    //------

    // Count nodes with value within a range
    void countNodesInRange(BinaryNode* root, int l, int r, int& count) {
        if(root == NULL) {
            return;
        }
        if(root -> data <= r && root -> data >= l) {
            count++;
        }
        // Added conditions
        if(root -> data >= l) {
            countNodesInRange(root -> left, l, r, count);
        }
        if(root -> data <= r) {
            countNodesInRange(root -> right, l, r, count);
        }    
    }


