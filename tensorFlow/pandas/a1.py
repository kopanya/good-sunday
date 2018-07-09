import pandas as pd
import numpy as np 

datas = pd.date_range('20130102', periods=6)
#print(datas)

df = pd.DataFrame(np.arange(24).reshape((6,4)), index=datas, columns=['A','B','C','D']);


#print(df['A'], df.A)
#print(df[0:3], df['20130102':'20130104'])

# select by label: loc
# print(df.loc['20130102'])
# print(df.loc[:,['A','B']])
# print(df.loc['20130102', ['A','B']])

# select by position: iloc
#print(df.iloc[3])
print(df.iloc[3, 1])
# print(df.iloc[3:5,0:2])
# print(df.iloc[[1,2,4],[0,2]])

# mixed selection: ix
# print(df.ix[:3, ['A', 'C']])
# # Boolean indexing
# print(df[df.A > 0])