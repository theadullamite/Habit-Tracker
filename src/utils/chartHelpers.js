import { format, subDays, eachDayOfInterval } from 'date-fns';

export const prepareChartData = (habit) => {
    // Defining the range (e.g., last 7 days)
    const last7days = eachDayOfInterval({
        start: subDays(new Date(), 6),
        end: new Date(),
    });

    return last7days.map(day => {
        const dateKey = format(day, 'yyyy-MM-dd');
        const status = habit.logs?.[dateKey];

        return {
            name: format(day, 'MMM dd'),
            completed: status === true ? 1 : 0,
            missed: status === false ? 1 : 0,
        };
    });
};