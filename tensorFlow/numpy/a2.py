# 合并
# 
import numpy as np 

A = np.array([1,1,2])[:, np.newaxis]
B = np.array([2,3,4])[:, np.newaxis]

C = np.vstack((A,B))
print(C)

D = np.hstack((A,B))
print(D, D.shape)

print(A[:, np.newaxis])

print(np.concatenate((A,B,B), axis=1))