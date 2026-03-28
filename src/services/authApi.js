const BASE_URL = "https://dummyjson.com";

async function parseResponse(res) {
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.message || "Request failed");
  }

  return data;
}

export async function findUsernameByIdentity(identity) {
  const trimmedIdentity = identity.trim();

  if (!trimmedIdentity) {
    throw new Error("Username or email is required");
  }

  if (!trimmedIdentity.includes("@")) {
    return trimmedIdentity;
  }

  const res = await fetch(
    `${BASE_URL}/users/filter?key=email&value=${encodeURIComponent(trimmedIdentity)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await parseResponse(res);

  if (!data.users || data.users.length === 0) {
    throw new Error("No user found with this email");
  }

  return data.users[0].username;
}

export async function loginWithDummy(identity, password, keepSignedIn = false) {
  const username = await findUsernameByIdentity(identity);

  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: keepSignedIn ? 60 * 24 * 7 : 60,
    }),
  });

  return parseResponse(res);
}

export async function getCurrentAuthUser(accessToken) {
  const res = await fetch(`${BASE_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return parseResponse(res);
}

export const demoAccounts = [
  {
    label: "Emily Johnson",
    username: "emilys",
    email: "emily.johnson@x.dummyjson.com",
    password: "emilyspass",
  },
  {
    label: "Michael Williams",
    username: "michaelw",
    email: "michael.williams@x.dummyjson.com",
    password: "michaelwpass",
  },
  {
    label: "Sophia Brown",
    username: "sophiab",
    email: "sophia.brown@x.dummyjson.com",
    password: "sophiabpass",
  },
  {
    label: "James Davis",
    username: "jamesd",
    email: "james.davis@x.dummyjson.com",
    password: "jamesdpass",
  },
  {
    label: "Emma Miller",
    username: "emmaj",
    email: "emma.miller@x.dummyjson.com",
    password: "emmajpass",
  },
];