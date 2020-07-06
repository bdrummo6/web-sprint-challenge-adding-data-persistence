
exports.seed = async function(knex) {
   await knex('tasks').insert([
      {description: 'This is task #1.', project_id: 2, notes: 'These are notes for task #1'},
      {description: 'This is task #2.', project_id: 4, notes: 'These are notes for task #2'},
      {description: 'This is task #3.', project_id: 1, notes: 'These are notes for task #3'},
      {description: 'This is task #4.', project_id: 2, notes: 'These are notes for task #4'},
      {description: 'This is task #5.', project_id: 5, notes: 'These are notes for task #5'},
      {description: 'This is task #6.', project_id: 3, notes: 'These are notes for task #1'},
      {description: 'This is task #7.', project_id: 4, notes: 'These are notes for task #2'},
      {description: 'This is task #8.', project_id: 3, notes: 'These are notes for task #3'},
      {description: 'This is task #9.', project_id: 1, notes: 'These are notes for task #4'},
      {description: 'This is task #10', project_id: 5, notes: 'These are notes for task #5'},

   ])
}