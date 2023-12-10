# Course Registration

### [Course Registration Live](delicious-pan.surge.sh)

- ## Project features

##### 1. Selecting a course from all of the course and showing course information to the UI.

##### 2. While selecting a course by clicking on _`Select`_ button , showing _course title,total credit hour, remaining credit hour, course price_ on the UI.

##### 3. With a fixed total credit for selecting courses, if total credit exceeds and a single course is selected more than once showing _`toasted alert to UI .`_

#

- ## State management of the project

##### I have included _`5 useState() & 1 useEffect() hook`_ in the project _course registration_ to manage the sates. Below contains states with explanations.

##### _`useEffect()`_ used to fetch data & _`setCourses`_ does fetched data to _`courses`_ state.

```
 useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
```

##### _`UseState()`_ are used for managing & updating component state in React functional components.

```
  const [courses, setCourses] = useState([])
  const [courseInfo, setCourseInfo] = useState([])
  const [credit, setCredit] = useState(0)
  const [remaining, setRemaining] = useState(20)
  const [totalPrice, setTotalPrice] = useState(0)
```

##### _`const [courses, setCourses] = useState([])`_ contains Array of Objects from `'data.json'`. _`[courses]`_ contains all data of the project. By mapping _`courses`_ _all Objects of Array of Objects_ are passed as props to `Course.jsx` for generating each course card.

##### _`const [courseInfo, setCourseInfo] = useState([])`_ this state contains _`individual course data`_ mapped from `[courses]`.

##### _`const [credit, setCredit] = useState(0)`_ is numeric value `0` initially so that _`handleSelect()`_ functions _`course param`_ can be used for setting previousCredit variable after that by doing _`Array.forEach()`_ on _`courseInfo`_ for setting it conditionally to `credit state.`

##### _` const [remaining, setRemaining] = useState(20)`_ initial value of _`remaining state`_ is _`20.`_ _`remaining state `_ contains credit hour decreased from total credit hour. When total credit hour is 20hr, remaining credit hour is 0hr.

##### _`const [totalPrice, setTotalPrice] = useState(0)`_ sets totalPrice state by declaring a previousPrice variable from handleSelect() functions param course object. By doing _`Array.forEach()`_ on _`courseInfo`_ to extract price and _`setTotalPrice`_ to the state.
