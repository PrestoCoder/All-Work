#include<iostream>
#include<stack>
#include<string>
#include<vector>
using namespace std;

int main() {
    stack<int> s1;
    // stack<string> s2;
    // stack<vector<int>> s3;

    s1.push(5);
    s1.push(4);
    s1.push(3);
    s1.push(2);
    // Just returns the top element
    cout << s1.top() << endl;
    cout << s1.top() << endl;
    // Pops but not returns the top element
    s1.pop();
    cout << s1.top() << endl;
}