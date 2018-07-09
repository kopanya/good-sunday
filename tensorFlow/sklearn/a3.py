from sklearn import datasets
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt


loaded_data = datasets.load_boston()
data_x = loaded_data.data
data_y = loaded_data.target

model = LinearRegression()

model.fit(data_x, data_y)
## print(model.predict(data_x[:4, :]))

print(model.coef_)
print(model.intercept_)
print(model.get_params())
print(model.score(data_x, data_y))