function ProfileInfoItem({ label, value }) {
  return (
    <div className="profile-info-item">
      <span className="profile-info-item__label">{label}</span>
      <span className="profile-info-item__value">{value || "Non renseigné"}</span>
    </div>
  );
}

export default ProfileInfoItem;