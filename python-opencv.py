cv2.4.13， python 2.7.12

mona lisa：
渐变，，模糊处理障眼法？透视？  chapter10图像混合，addweighted
chapter17， enrode， 做出核心支架信息？

distance detection:
轮廓在形状分析和物体的检测和识别中很有用


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

版本：
    # cv3
    # fourcc = cv2.VideoWriter_fourcc(*'XVID')
	3.0以前3.0-beta（2014.11.11）
	在中文版python tutorials Jan 3 21:06:22 2014
	fourcc = cv2.cv.FOURCC(*'XVID')可用

	In OpenCV 2, findContours returns just two values, contours and hierarchy. 
	The error occurs when python tries to assign those two values to the three names given on left in this statement:
	drawContours cv2 无返回值，cv3有返回值

	# cv3
	#box = cv2.boxPoints(rect)
	# cv2
	box = cv2.cv.BoxPoints(rect)

	# img3 = cv2.circle(img3,center,radius,(0,255,0),2)
    # cv2
    n = cv2.circle(img3,center,radius,(0,255,0),2)
	
	#cv3
    # img = cv2.line(img,(cols-1,righty),(0,lefty),(0,255,0),2)
    #cv2
    cv2.line(img3,(cols-1,righty),(0,lefty),(0,255,0),2)
	
	
blur 模糊，去噪音， filters 滤波器

最新版python-opencv-python-tutroals措辞比较准确，

高斯窗口threshold， 高斯模糊（滤波）+ ostu threshold

第一个像素卷积平均值或别的值会在卷积第二个像素时用到吗？

梯度滤波器=高通滤波器，看来以前的均值中值高斯双边都是低通滤波器
 gradients_edge
 求边界，即求离散倒数，边界存在导致边界边缘两侧高度明显不同，导数较大

canny 不需要阈值处理

draw and compute area
	area = cv2.contourArea(cnt)
	hull = cv2.convexHull(cnt)
	hull_area = cv2.contourArea(hull)

	cv2.drawContours(img3,[box],0,(0,0,255),2)

