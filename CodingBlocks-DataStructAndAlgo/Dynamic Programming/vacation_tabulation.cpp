// https://atcoder.jp/contests/dp/tasks/dp_c

#include<iostream>
#include<vector>
#include<algorithm>
#include<unordered_map>
using namespace std;

unordered_map<int, unordered_map<int, int> > map1;

int helper(int n, vector< vector<int> >& v1) {
    map1[0][0] = v1[0][0];
    map1[0][1] = v1[0][1];
    map1[0][2] = v1[0][2];
    for(int i = 1; i < n; i++) {
        map1[i][0] = max(map1[i - 1][1], map1[i - 1][2]) + v1[i][0];
        map1[i][1] = max(map1[i - 1][0], map1[i - 1][2]) + v1[i][1];
        map1[i][2] = max(map1[i - 1][1], map1[i - 1][0]) + v1[i][2];
    }
    return max(map1[n - 1][0], max(map1[n - 1][1], map1[n - 1][2]));
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