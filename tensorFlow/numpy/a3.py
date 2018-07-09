# 分割
import numpy as np 

A = np.arange(12).reshape(3,4)
print(A)
print(np.split(A, 3 ,axis=0))

print(np.vsplit(A, 3))

print(np.array_split(A, 3, axis=1))