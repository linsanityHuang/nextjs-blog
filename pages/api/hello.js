export default function handler(req, res) {
    res.status(200).json({ text: 'Hello', name: 'John Doe', age: 30});
}