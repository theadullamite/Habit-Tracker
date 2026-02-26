import { format, subDays, eachDayOfInterval } from 'date-fns';

export const prepareChartData = (habits) => {
    // Defining the range (e.g., last 7 days)
    const last7days = eachDayOfInterval({
        start: subDays(new Date(), 6),
        end: new Date(),
    });

    return last7days.map(day => {
        const dateKey = format(day, 'yyyy-MM-dd');

        let completedCount = 0;
        let missedCount = 0;

        habits.forEach((habit) => {
            const status = habit.logs?.[dateKey];

            if (status === true) completedCount++;
            if (status === false) missedCount++;
        });
        

        return {
            name: format(day, 'MMM dd'),
            completed: completedCount,
            missed: missedCount,
        };
    });
};