export function createHabit({ name, frequency, startDate }) {
    return {
        id: crypto.randomUUID(),
        name,
        frequency,
        startDate,
        logs: {},
        createdAt: new Date().toISOString(),
    };
}