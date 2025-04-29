// in-memory DB for thoughts (can be moved to a DB later)

// Use global scope to preserve memory across API routes in local dev
global.thoughts = global.thoughts || {};
export const thoughts = global.thoughts;
