package com.ssm.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class TimeUtil {

	public static Calendar calendar = Calendar.getInstance();

	public static Long currentTime() {
		calendar.setTime(new Date());
		return calendar.getTimeInMillis();
	}

	public static String timeToString(Long time) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		calendar.setTimeInMillis(time);
		return sdf.format(calendar.getTime());
	}

	public static String timeToString1(Long time) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		calendar.setTimeInMillis(time);
		return sdf.format(calendar.getTime());
	}
}
