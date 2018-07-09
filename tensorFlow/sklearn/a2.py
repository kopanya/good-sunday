from sklearn import datasets
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt


loaded_data = datasets.load_boston()
data_x = loaded_data.data
data_y = loaded_data.target

model = LinearRegression()

model.fit(data_x, data_y)
print(model.predict(data_x[:4, :]))
print(data_y[:4])

x, y = datasets.make_regression(n_samples=100, n_features=1, n_targets=1, noise=10)

plt.scatter(x, y)
plt.show()