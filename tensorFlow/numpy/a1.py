import numpy as np 

a = np.array([2,23,4], dtype=np.int)
print(a.dtype)

b = np.zeros((3,4))
print(b)

c = np.ones( (3, 3), dtype=np.int)
print(c)

d = np.empty((3, 3), dtype=np.float)
print(d)

e = np.arange(0, 24, 2).reshape(3,4) # 3行4列，0到11

print(e)

f = np.linspace(1, 10, 20)  # 开始端1，结束端10，且分割成20个数据，生成线段
print(f)

g = np.random.random((2,4))

print( np.sum(g, axis=1))
print( np.min(g))
print( g)