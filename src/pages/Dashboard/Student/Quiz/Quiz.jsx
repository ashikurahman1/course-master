import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const questionPool = [
  // ================= Programming Questions (1-14) =================
  {
    id: 1,
    topic: 'programming',
    question: 'What is JavaScript?',
    options: ['Programming language', 'Database', 'Framework', 'OS'],
    answer: 'Programming language',
  },
  {
    id: 2,
    topic: 'programming',
    question: 'Which symbol is used for comments in JS?',
    options: ['//', '<!-- -->', '#', '/* */'],
    answer: '//',
  },
  {
    id: 3,
    topic: 'programming',
    question: 'What does "===" mean in JS?',
    options: ['Assignment', 'Strict equality', 'Comparison', 'Function'],
    answer: 'Strict equality',
  },
  {
    id: 4,
    topic: 'programming',
    question: 'Which method converts JSON to a JS object?',
    options: [
      'JSON.parse()',
      'JSON.stringify()',
      'JSON.toObject()',
      'JSON.convert()',
    ],
    answer: 'JSON.parse()',
  },
  {
    id: 5,
    topic: 'programming',
    question: 'Which keyword declares a variable with block scope?',
    options: ['var', 'let', 'const', 'function'],
    answer: 'let',
  },
  {
    id: 6,
    topic: 'programming',
    question: 'Which one is a JavaScript framework?',
    options: ['React', 'Django', 'Laravel', 'Flask'],
    answer: 'React',
  },
  {
    id: 7,
    topic: 'programming',
    question: 'What is the correct way to define a function?',
    options: [
      'function myFunc() {}',
      'func myFunc() {}',
      'def myFunc() {}',
      'function:myFunc() {}',
    ],
    answer: 'function myFunc() {}',
  },
  {
    id: 8,
    topic: 'programming',
    question: 'Which operator is used for exponentiation?',
    options: ['^', '**', '%', '*'],
    answer: '**',
  },
  {
    id: 9,
    topic: 'programming',
    question: 'Which method adds an element at the end of an array?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    answer: 'push()',
  },
  {
    id: 10,
    topic: 'programming',
    question: 'Which loop is guaranteed to run at least once?',
    options: ['for', 'while', 'do-while', 'foreach'],
    answer: 'do-while',
  },
  {
    id: 11,
    topic: 'programming',
    question: 'What does NaN stand for?',
    options: ['Not a Number', 'Number and Null', 'New a Number', 'Not a Name'],
    answer: 'Not a Number',
  },
  {
    id: 12,
    topic: 'programming',
    question: 'Which keyword is used to handle errors?',
    options: ['try/catch', 'error', 'throw/catch', 'handle'],
    answer: 'try/catch',
  },
  {
    id: 13,
    topic: 'programming',
    question: 'Which method removes the last element of an array?',
    options: ['pop()', 'push()', 'shift()', 'unshift()'],
    answer: 'pop()',
  },
  {
    id: 14,
    topic: 'programming',
    question: 'Which of these is not a JS data type?',
    options: ['String', 'Number', 'Boolean', 'Character'],
    answer: 'Character',
  },

  // ================= Database Questions (15-27) =================
  {
    id: 15,
    topic: 'database',
    question: 'Which is a NoSQL database?',
    options: ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle'],
    answer: 'MongoDB',
  },
  {
    id: 16,
    topic: 'database',
    question: 'SQL stands for?',
    options: [
      'Structured Query Language',
      'Simple Query Language',
      'Standard Query Language',
      'Server Query Language',
    ],
    answer: 'Structured Query Language',
  },
  {
    id: 17,
    topic: 'database',
    question: 'Which command is used to remove a table?',
    options: ['DROP TABLE', 'DELETE TABLE', 'REMOVE TABLE', 'TRUNCATE TABLE'],
    answer: 'DROP TABLE',
  },
  {
    id: 18,
    topic: 'database',
    question: 'Which command adds a new record?',
    options: ['INSERT INTO', 'ADD', 'UPDATE', 'CREATE RECORD'],
    answer: 'INSERT INTO',
  },
  {
    id: 19,
    topic: 'database',
    question: 'Which SQL keyword is used to sort results?',
    options: ['ORDER BY', 'SORT BY', 'GROUP BY', 'WHERE'],
    answer: 'ORDER BY',
  },
  {
    id: 20,
    topic: 'database',
    question: 'Which is a relational database?',
    options: ['MySQL', 'MongoDB', 'Cassandra', 'Redis'],
    answer: 'MySQL',
  },
  {
    id: 21,
    topic: 'database',
    question: 'Which statement updates existing data?',
    options: ['UPDATE', 'INSERT', 'MODIFY', 'CHANGE'],
    answer: 'UPDATE',
  },
  {
    id: 22,
    topic: 'database',
    question: 'Which command deletes all records but keeps table?',
    options: ['TRUNCATE', 'DROP', 'DELETE', 'REMOVE'],
    answer: 'TRUNCATE',
  },
  {
    id: 23,
    topic: 'database',
    question: 'Which command retrieves data?',
    options: ['SELECT', 'FETCH', 'GET', 'RETRIEVE'],
    answer: 'SELECT',
  },
  {
    id: 24,
    topic: 'database',
    question: 'Primary key must be?',
    options: ['Unique', 'Null', 'Duplicate', 'Optional'],
    answer: 'Unique',
  },
  {
    id: 25,
    topic: 'database',
    question: 'Foreign key is used for?',
    options: ['Relationships', 'Unique ID', 'Sorting', 'Indexing'],
    answer: 'Relationships',
  },
  {
    id: 26,
    topic: 'database',
    question: 'Which SQL keyword filters records?',
    options: ['WHERE', 'FILTER', 'HAVING', 'SELECT'],
    answer: 'WHERE',
  },
  {
    id: 27,
    topic: 'database',
    question: 'Which SQL keyword is used to group data?',
    options: ['GROUP BY', 'ORDER BY', 'WHERE', 'HAVING'],
    answer: 'GROUP BY',
  },

  // ================= Web Development Questions (28-40) =================
  {
    id: 28,
    topic: 'web',
    question: 'HTML stands for?',
    options: [
      'Hyper Text Markup Language',
      'Hyperlinks Text Mark Language',
      'High Text Markup Language',
      'Hyper Tool Markup Language',
    ],
    answer: 'Hyper Text Markup Language',
  },
  {
    id: 29,
    topic: 'web',
    question: 'Which is CSS framework?',
    options: ['Bootstrap', 'Django', 'React', 'NodeJS'],
    answer: 'Bootstrap',
  },
  {
    id: 30,
    topic: 'web',
    question: 'Which tag is used for a paragraph?',
    options: ['<p>', '<div>', '<h1>', '<span>'],
    answer: '<p>',
  },
  {
    id: 31,
    topic: 'web',
    question: 'Which property changes text color in CSS?',
    options: ['color', 'background-color', 'font-size', 'text-style'],
    answer: 'color',
  },
  {
    id: 32,
    topic: 'web',
    question: 'Which HTML attribute is used for links?',
    options: ['href', 'src', 'link', 'id'],
    answer: 'href',
  },
  {
    id: 33,
    topic: 'web',
    question: 'Which tag is used to include JS?',
    options: ['<script>', '<js>', '<javascript>', '<code>'],
    answer: '<script>',
  },
  {
    id: 34,
    topic: 'web',
    question: 'CSS stands for?',
    options: [
      'Cascading Style Sheets',
      'Computer Style Sheets',
      'Creative Style Sheets',
      'Colorful Style Sheets',
    ],
    answer: 'Cascading Style Sheets',
  },
  {
    id: 35,
    topic: 'web',
    question: 'Which HTML tag defines the title of a page?',
    options: ['<title>', '<head>', '<h1>', '<meta>'],
    answer: '<title>',
  },
  {
    id: 36,
    topic: 'web',
    question: 'Which property is used for spacing between elements?',
    options: ['margin', 'padding', 'border', 'gap'],
    answer: 'margin',
  },
  {
    id: 37,
    topic: 'web',
    question: 'Which tag is used for ordered list?',
    options: ['<ol>', '<ul>', '<li>', '<list>'],
    answer: '<ol>',
  },
  {
    id: 38,
    topic: 'web',
    question: 'Which HTML tag displays an image?',
    options: ['<img>', '<image>', '<picture>', '<src>'],
    answer: '<img>',
  },
  {
    id: 39,
    topic: 'web',
    question: 'Which CSS property is used to change font size?',
    options: ['font-size', 'text-size', 'font-style', 'text-style'],
    answer: 'font-size',
  },
  {
    id: 40,
    topic: 'web',
    question: 'Which tag is used for a line break?',
    options: ['<br>', '<break>', '<lb>', '<hr>'],
    answer: '<br>',
  },
];

const getRandomQuestions = (pool, count = 10) => {
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
const Quiz = () => {
  const { courseId, moduleId } = useParams();
  const axiosSecure = useAxiosSecure();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(getRandomQuestions(questionPool, 10));

    const fetchStatus = async () => {
      try {
        const res = await axiosSecure.get(
          `/student/courses/${courseId}/modules/${moduleId}/quiz-status`
        );
        if (res.data.submitted) {
          setSubmitted(true);
          setScore(res.data.score);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchStatus();
  }, [axiosSecure, courseId, moduleId]);

  const handleChange = (index, option) => {
    setAnswers(prev => ({ ...prev, [index]: option }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let calcScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) calcScore += 1;
    });
    const percent = Math.round((calcScore / questions.length) * 100);

    try {
      await axiosSecure.post(
        `/student/courses/${courseId}/modules/${moduleId}/quiz`,
        { score: percent }
      );
      setScore(percent);
      setSubmitted(true);
      Swal.fire('Success', `Quiz submitted! Score: ${percent}%`, 'success');
    } catch (err) {
      Swal.fire(
        'Error',
        err.response?.data?.message || 'Failed to submit',
        'error'
      );
    }
  };

  if (submitted)
    return (
      <div className="p-5">
        <h2 className="text-2xl font-semibold">Quiz Result</h2>
        <p className="text-lg mt-4">Your Score: {score}%</p>
      </div>
    );

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-5">Take Quiz</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-3xl">
        {questions.map((q, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <p className="font-semibold">{q.question}</p>
            <div className="flex flex-col gap-2 mt-2">
              {q.options.map(opt => (
                <label
                  key={opt}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={opt}
                    checked={answers[index] === opt}
                    onChange={() => handleChange(index, opt)}
                    required
                    className="radio checked:bg-blue-500"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="btn btn-primary mt-4"
          disabled={submitted}
        >
          Submit Quiz
        </button>
      </form>
    </div>
  );
};

export default Quiz;
