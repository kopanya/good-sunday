import tensorflow as tf;
import numpy as np;
from tensorflow.examples.tutorials.mnist import input_data

mnist = input_data.read_data_sets("MNIST_data", one_hot=True)
# import matplotlib.pyplot as plt;
 
# c = tf.truncated_normal(shape=[5,5,1,32], mean=0, stddev=1)

x = tf.placeholder(tf.float32, shape=[None, 784])
_y = tf.placeholder(tf.float32, shape=[None, 10])


# with tf.Session() as sess:
# 	print(sess.run(c))

def weight_variable(shape):
  initial = tf.truncated_normal(shape=shape, stddev=0.1)
  return tf.Variable(initial)

def bias_variable(shape):
  initial = tf.constant(0.1, shape=shape)
  return tf.Variable(initial)

def conv2d(x, W):
  return tf.nn.conv2d(x, W, strides=[1,1,1,1], padding='SAME')

def max_poll_2x2(x):
  return tf.nn.max_pool(x, ksize=[1,2,2,1])

# layer1
W_conv1 = weight_variable([5,5,1,32])
b_conv1 = bias_variable([32])
h_conv1 = conv2d(x, W_conv1)





