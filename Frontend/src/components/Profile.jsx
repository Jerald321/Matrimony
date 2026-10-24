import { useState } from 'react';

const defaultProfiles = [
  {
    id: 1,
    name: 'Aisha Rahman',
    age: 27,
    city: 'Dhaka',
    occupation: 'Product Designer',
    bio: 'Looking for a kind, respectful partner who values family and long-term happiness.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Khalid Hasan',
    age: 29,
    city: 'Chattogram',
    occupation: 'Software Engineer',
    bio: 'Enjoys travel, meaningful conversations, and building a peaceful future together.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
];

const emptyForm = {
  name: '',
  age: '',
  city: '',
  occupation: '',
  bio: '',
  image: '',
};

const Profile = () => {
  const [profiles, setProfiles] = useState(defaultProfiles);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = form.name.trim();
    if (!trimmedName) {
      return;
    }

    const newProfile = {
      id: editingId ?? Date.now(),
      name: trimmedName,
      age: Number(form.age) || 0,
      city: form.city.trim(),
      occupation: form.occupation.trim(),
      bio: form.bio.trim(),
      image:
        form.image.trim() ||
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    };

    if (editingId) {
      setProfiles((prev) =>
        prev.map((profile) => (profile.id === editingId ? newProfile : profile)),
      );
    } else {
      setProfiles((prev) => [newProfile, ...prev]);
    }

    resetForm();
  };

  const handleEdit = (profile) => {
    setEditingId(profile.id);
    setForm({
      name: profile.name,
      age: String(profile.age),
      city: profile.city,
      occupation: profile.occupation,
      bio: profile.bio,
      image: profile.image,
    });
  };

  const handleDelete = (id) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== id));

    if (editingId === id) {
      resetForm();
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div>
          <p className="profile-topline">Member profile</p>
          <h1>Profile Management</h1>
        </div>
        <button type="button" className="profile-button primary" onClick={resetForm}>
          {editingId ? 'Cancel Edit' : 'New Profile'}
        </button>
      </div>

      <div className="profile-layout">
        <form className="profile-form" onSubmit={handleSubmit}>
          <h2>{editingId ? 'Update profile' : 'Create profile'}</h2>

          <div className="form-grid">
            <label className="field-box">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
            </label>

            <label className="field-box">
              <span>Age</span>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="25"
              />
            </label>

            <label className="field-box">
              <span>City</span>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
              />
            </label>

            <label className="field-box">
              <span>Occupation</span>
              <input
                type="text"
                name="occupation"
                value={form.occupation}
                onChange={handleChange}
                placeholder="Occupation"
              />
            </label>

            <label className="field-box full-width">
              <span>Profile Image URL</span>
              <input
                type="url"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
            </label>

            <label className="field-box full-width">
              <span>Bio</span>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                placeholder="Write a short bio..."
                rows="4"
              />
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" className="profile-button primary">
              {editingId ? 'Update Profile' : 'Add Profile'}
            </button>
            <button type="button" className="profile-button secondary" onClick={resetForm}>
              Clear
            </button>
          </div>
        </form>

        <div className="profile-list">
          <h2>Profiles</h2>

          {profiles.length === 0 ? (
            <div className="empty-state">No profiles available yet.</div>
          ) : (
            profiles.map((profile) => (
              <article key={profile.id} className="profile-card">
                <img src={profile.image} alt={profile.name} className="profile-image" />

                <div className="profile-card-body">
                  <div className="profile-card-top">
                    <h3>{profile.name}</h3>
                    <span>{profile.age} yrs</span>
                  </div>

                  <p className="meta-line">
                    {profile.city} • {profile.occupation}
                  </p>
                  <p className="bio-text">{profile.bio}</p>

                  <div className="card-actions">
                    <button type="button" className="profile-button small" onClick={() => handleEdit(profile)}>
                      Edit
                    </button>
                    <button type="button" className="profile-button danger small" onClick={() => handleDelete(profile.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
