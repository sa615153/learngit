cv2.4.13， python 2.7.12

imshow和waitkey联合使用
cv2.imshow('image',img)
cv2.waitkey(2000)
#照片显示2秒后消失，若没有waitKey，只会闪一下

# //video file：
r'I:\USTC\opencv\2.4.13\opencv\sources\3rdparty\ffmpeg'
两个dll改版本号，复制到python根目录下
把3rd那个目录加入环境变量不管用，得复制

在dell里，ffmpeg里文件复制改名，且复制到python_64下，但python_64不再环境变量里，但ffmepg在环境变量里，可用(需把目录换成斜杠'C:/Users/JPang3/Desktop/beijing/opencv/opencv_projects/python-opencv/wildlife.wmv')


#  //save video
http://docs.opencv.org/3.0-beta/doc/py_tutorials/py_gui/py_video_display/py_video_display.html#display-video
http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_gui/py_video_display/py_video_display.html#display-video
fourcc = cv2.VideoWriter_fourcc(*'XVID')不可用

3.0以前3.0-beta（2014.11.11）
在中文版python tutorials Jan 3 21:06:22 2014
fourcc = cv2.cv.FOURCC(*'XVID')可用





