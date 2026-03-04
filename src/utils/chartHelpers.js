import { format, subDays, eachDayOfInterval, isAfter, isEqual, parseISO } from 'date-fns';

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
        let completed = [];
        let missed = [];

  

        habits.forEach((habit) => {
      if (!habit.startDate) return;

      const habitStartDate = parseISO(habit.startDate);
      if (day < habitStartDate) return;

      // Only count if habit was active that day
      const habitWasActive =
        isAfter(day, habitStartDate) || isEqual(day, habitStartDate);

      if (!habitWasActive) return;

      const status = habit.logs?.[dateKey];

      if (status === true) {
        completed.push(habit.name);
        completedCount++;
      } else {
        missed.push(habit.name);
        // false OR undefined both count as missed
        missedCount++;
      }
    });
        

        return {
            name: format(day, 'MMM dd'),
            completed: completedCount,
            missed: missedCount,
            completedHabits: completed,
            missedHabits: missed,
        };
    });
};