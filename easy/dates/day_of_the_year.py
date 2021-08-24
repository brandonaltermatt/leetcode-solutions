import datetime
"""
Calculate the number of days elapsed in the given year.

Store the month, day, and year. Creat an array for the days in the months.
If the year is a leap year, add another day to feburary.
For each month except the current month, add the number of days
for that month to the day value.
"""
class Solution:
    def dayOfYear(self, date: str) -> int:
        year = int(date[0:4])
        month = int(date[5:7])
        day = int(date[8:10])
        daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31]

        if(((year%4==0) and (year%100!=0)) or (year%400==0)):
            daysInMonth[1]=29

        for x in range(month-1):
            day += daysInMonth[x]

        return day

"""
class Solution:
    def dayOfYear(self, date: str) -> int:
        Y, M, D = map(int, date.split('-'))
        return int((datetime.date(Y, M, D) - datetime.date(Y, 1, 1)).days + 1)
"""