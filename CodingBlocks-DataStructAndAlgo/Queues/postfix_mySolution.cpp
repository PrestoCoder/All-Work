#include<iostream>
#include<queue>
#include<string>
using namespace std;

// This is my solution
// A bit complicated than using stack

int performOperation(int n1, int n2, char operatr) {
    if(operatr == '+') {
        return n1 + n2;
    }
    if(operatr == '-') {
        return n1 - n2;
    }
    if(operatr == '*') {
        return n1 * n2;
    }
    return n1 / n2;
}

bool isOperatr(char c) {
    if(c == '+' || c == '-' || c == '*' || c == '/') {
        return true;
    }
    return false;
}

int postFix(queue<char>& q1) {
    // Base cases
    // If only one number, return that
    if(q1.size() == 1) {
        return q1.front() - '0';
    }

    // If 3 elements, one will be operator, and other 2 numbers
    // Simply perform the operation and return
    if(q1.size() == 3) {
        if(isOperatr(q1.front())) {
            char o1 = q1.front();
            q1.pop();
            int n2 = q1.front() - '0';
            q1.pop();
            int n1 = q1.front() - '0';
            q1.pop();
            return performOperation(n1, n2, o1);
        }
    }

    char operatr = q1.front();
    q1.pop();
    // Finding the sub queues on which the operator will act on
    queue<char> tempQueue;

    // Filling tempQueue
    int intCount = 0;
    while(1) {
        if(isOperatr(q1.front())) {
            if(intCount > 0) {
                // Break loop as queue has been correctly filled
                break;
            } else {
                tempQueue.push(q1.front());
                q1.pop();
            }
        } else {
            tempQueue.push(q1.front());
            q1.pop();
            intCount++;
        }
    }

    // Remaining is the second half of the queue to be passed to recursion
    int ans2 = postFix(tempQueue);
    int ans1 = postFix(q1);

    return performOperation(ans1, ans2, operatr);
}

int main() {
    string str;
    cin >> str;
    // Converting the string to a queue
    queue<char> q1;
    for(int i = str.length() - 1; i >= 0; i--) {
        q1.push(str[i]);
    }
    cout << postFix(q1);
}