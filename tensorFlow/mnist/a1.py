import tensorflow as tf
from tensorflow.examples.tutorials.mnist import input_data
#from tensorflow.

mnist = input_data.read_data_sets("MNIST_data/", one_hot=True)

def add_layer(inputs, in_size, out_size, activation_function=None):
  W = tf.Variable(tf.random_normal([in_size, out_size]))
  b = tf.Variable(tf.zeros([1, out_size]) + 0.01 )
  y = tf.matmul(inputs, W) + b
  if activation_function is None:
    outputs = y 
  else:
    outputs = activation_function(y)
  return outputs

def compute_accuracy(v_xs, v_ys):
    global prediction
    y_pre = sess.run(prediction, feed_dict={x: v_xs})
    correct_prediction = tf.equal(tf.argmax(y_pre,1), tf.argmax(v_ys,1))
    accuracy = tf.reduce_mean(tf.cast(correct_prediction, tf.float32))
    result = sess.run(accuracy, feed_dict={x: v_xs, y_: v_ys})
    return result
  

x = tf.placeholder(tf.float32, [None, 784])
y_ = tf.placeholder(tf.float32, [None, 10])

prediction = add_layer(x, 784, 10, activation_function=tf.nn.softmax)


cross_entropy = -tf.reduce_sum(y_*tf.log(prediction))
train_step = tf.train.GradientDescentOptimizer(0.01).minimize(cross_entropy)

sess = tf.Session()
# important step
# tf.initialize_all_variables() no long valid from
# 2017-03-02 if using tensorflow >= 0.12
if int((tf.__version__).split('.')[1]) < 12 and int((tf.__version__).split('.')[0]) < 1:
    init = tf.initialize_all_variables()
else:
    init = tf.global_variables_initializer()
sess.run(init)

for i in range(1000):
    batch_xs, batch_ys = mnist.train.next_batch(100)
    sess.run(train_step, feed_dict={x: batch_xs, y_: batch_ys})
    if i % 50 == 0:
        print(compute_accuracy(
            mnist.test.images, mnist.test.labels))