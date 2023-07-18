#include<bits/stdc++.h>
#include<iostream>
#include<stack>
#include<vector>
using namespace std;

int main() {

    vector<int> v1;
    int n;
    cin >> n;
    for(int i = 0; i < n; i++) {
        int temp;
        cin >> temp;
        v1.push_back(temp);
    }
    stack<int> s1;
    vector<int> ans(n, -1);
    for(int i = 0; i < n; i++) {
        if(s1.size() == 0) {
            s1.push(i);
            continue;
        }
        while(1) {
            // If stack empty
            if(s1.size() == 0) {
                s1.push(i);
                break;
            }
            int sTop = s1.top();
            // If top element is smaller than curr element, pop the smaller element, 
            // update ans vector, and continue.
            // We don't break here, as there might be more than 1 elements in stack
            // which couuld be smaller than curr element.
            if(v1[i] > v1[sTop]) {
                ans[sTop] = v1[i];
                s1.pop();
            // If top element is larger than curr element, simply push the curr element
            // onto the stack.
            } else if(v1[i] <= v1[sTop]) {
                s1.push(i);
                break;
            }
        }
    }
    for(int i = 0; i < n; i++) {
        cout << ans[i] << " ";
    }
    return 0;
}