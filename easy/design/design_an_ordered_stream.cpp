/* https://leetcode.com/problems/design-an-ordered-stream/
There is a stream of n (idKey, value) pairs arriving in an arbitrary order, 
where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.
Design a stream that returns the values in increasing order of their IDs 
by returning a chunk (list) of values after each insertion. 
The concatenation of all the chunks should result in a list of the sorted values.

Implement the OrderedStream class:
    OrderedStream(int n) Constructs the stream to take n values.
    String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, 
    then returns the largest possible chunk of currently inserted values that appear next in the order.
*/

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