#include <bits/stdc++.h>
using namespace std;

/// fix chinese remainder theorem ----- implementation!!

int main()
{
    int val[] = {3,5,7};
    int rem[] = {2,3,2};
    bool status = true;
    int i = 0;
    int j = 4;
    while(status){
        if(j<4){
            if(i%val[j] == rem[j]){
                j++;
                if(i%val[j] == rem[j]){
                    j++;
                    if(i%val[j] == rem[j]){
                        j = j+2;
                        status = false;
                    }
                }
            }
        }else{
            j = 0;
        }
    }
    if(status == false){
        cout << "X: " << j << endl;
    }
}