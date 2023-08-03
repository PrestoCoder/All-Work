// https://atcoder.jp/contests/dp/tasks/dp_c

#include<iostream>
#include<vector>
#include<algorithm>
#include<unordered_map>
using namespace std;

unordered_map<int, unordered_map<int, int> > map1;

int helper(int n, vector< vector<int> >& v1, int lastChoice = -1) {
	if(n == 0) {
		return 0;
	}
	if(map1[n][lastChoice] != 0) {
		return map1[n][lastChoice];
	}
	int choice0 = 0, choice1 = 0, choice2 = 0;
	if(lastChoice != 0) {
		choice0 = v1[n - 1][0] + helper(n - 1, v1, 0);
	}
	if(lastChoice != 1) {
		choice1 = v1[n - 1][1] + helper(n - 1, v1, 1);
	}
	if(lastChoice != 2) {
		choice2 = v1[n - 1][2] + helper(n - 1, v1, 2);
	}
	map1[n][lastChoice] = max(choice0, max(choice1, choice2));
	return max(choice0, max(choice1, choice2));
}

int main(){
	int n;
	cin >> n;
	vector< vector<int> > v1(n);
	for(int i = 0; i < n; i++) {
		int a;
		cin >> a;
		v1[i].push_back(a);

		int b;
		cin >> b;
		v1[i].push_back(b);

		int c;
		cin >> c;
		v1[i].push_back(c);
	}

	cout << helper(n, v1);
}