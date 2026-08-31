------------------------------------------------------Brute-------------------------------------------------------------
class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        vector<int> v;
        for(int i=0;i<matrix.size();i++){
            for(int j=0;j<matrix[0].size();j++){
                if(matrix[i][j]==0){
                   v.push_back(i);
                   v.push_back(j);
                   }
                }
            }
        for(int it=0;it<v.size();it++){
            if(it%2==0){
                for(int j=0;j<matrix[0].size();j++){
                    matrix[v[it]][j]=0;
                }
            }else{
                for(int i=0;i<matrix.size();i++){
                    matrix[i][v[it]]=0;
                }
            }
        }
    }
};