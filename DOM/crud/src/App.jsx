import { useState, useRef } from "react";

function App() {
  const [form, setForm] = useState({
    country: "",
    code: "",
    name: "",
    gst: "",
    ne: false,
    active: false,
  });

  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");

  const countryRef = useRef();
  const codeRef = useRef();
  const nameRef = useRef();
  const gstRef = useRef();

  // Handle input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Submit (Create + Update)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.country) {
      alert("Country is required");
      countryRef.current.focus();
      return;
    }

    if (!form.code) {
      alert("Code is required");
      codeRef.current.focus();
      return;
    }

    if (!form.name) {
      alert("Name is required");
      nameRef.current.focus();
      return;
    }

    if (!form.gst) {
      alert("GST is required");
      gstRef.current.focus();
      return;
    }

    if (editIndex !== null) {
      const updated = [...data];
      updated[editIndex] = form;
      setData(updated);
      setEditIndex(null);
    } else {
      setData([...data, form]);
    }

    handleReset();
  };

  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef.current.focus();
    }
  };

  // Reset
  const handleReset = () => {
    setForm({
      country: "",
      code: "",
      name: "",
      gst: "",
      ne: false,
      active: false,
    });

    countryRef.current.focus();
  };

  // Delete
  const handleDelete = (index) => {
    const filtered = data.filter((_, i) => i !== index);
    setData(filtered);
  };

  // Edit
  const handleEdit = (index) => {
    setForm(data[index]);
    setEditIndex(index);
  };

  // Filter
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container mt-4">
      <h3>State Details</h3>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="card p-3 mb-4">
        <div className="row g-3">
          <div className="col-md-3">
            <label>Country</label>
            <select
              ref={countryRef}
              className="form-control"
              name="country"
              value={form.country}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, codeRef)}
            >
              <option value="">Select</option>
              <option>India</option>
              <option>USA</option>
            </select>
          </div>

          <div className="col-md-2">
            <label>Code</label>
            <input
              ref={codeRef}
              type="text"
              className="form-control"
              name="code"
              value={form.code}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, nameRef)}
            />
          </div>

          <div className="col-md-3">
            <label>Name</label>
            <input
              ref={nameRef}
              type="text"
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, gstRef)}
            />
          </div>

          <div className="col-md-1 d-flex align-items-center">
            <input
              type="checkbox"
              name="ne"
              checked={form.ne}
              onChange={handleChange}
            />
            <label className="ms-2">NE</label>
          </div>

          <div className="col-md-1 d-flex align-items-center">
            <input
              type="checkbox"
              name="active"
              checked={form.active}
              onChange={handleChange}
            />
            <label className="ms-2">Active</label>
          </div>
        </div>

        <div className="mt-3">
          <button className="btn btn-success me-2">
            {editIndex !== null ? "Update" : "Save"}
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by name..."
        className="form-control mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Action</th>
            <th>Country</th>
            <th>Code</th>
            <th>Name</th>
            <th>GST</th>
            <th>NE</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
              <td>{item.country}</td>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.gst}</td>
              <td>{item.ne ? "YES" : "NO"}</td>
              <td>{item.active ? "YES" : "NO"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
