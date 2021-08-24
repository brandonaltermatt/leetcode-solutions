using namespace std;
#include <string>
#include <vector>

class OrderedStream {
public:
    vector<string> myStream;
    int index= 1;

    OrderedStream(int n){
        myStream.resize(n+1);
    }
    
    vector<string> insert(int id, string value) {
        vector<string> res;
        myStream[id]= value;

        if(id == index){
            while(index<=myStream.size() && !myStream[index].empty()){
                res.push_back(myStream[index]);
                ++index;
            }
        }

        return res;
    }
};