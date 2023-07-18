#include<iostream>
#include<stack>
#include<string>

using namespace std;

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

void postFix(string str, stack<int>& numStack, int index = 0) {
    if(index == str.length()) {
        return;
    }
    // If current character a number, push into stack
    if(!isOperatr(str[index])) {
        int num = str[index] - '0';
        numStack.push(num);
    // If an operator, take out last two nums from the stack and perform operation
    } else {
        int n2 = numStack.top();
        numStack.pop();
        int n1 = numStack.top();
        numStack.pop();
        int ans = performOperation(n1, n2, str[index]);
        numStack.push(ans);
    }
    postFix(str, numStack, index + 1);
}

int main() {
    string str;
    cin >> str;
    stack<int> s1;
    postFix(str, s1);
    cout << s1.top();
}