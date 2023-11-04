"use client";
import React from "react";
import { createContext, useState } from "react";

export const PostContext = createContext();
export const PostProvider = ({ children }) => {
  let [state, setState] = useState(3);

  const posts = [
    {
      id: 0,
      postUrl: "/blog/posts/0",
      imageSrc:
        "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      imageTitle: "Announcing a free plan for small teams",
      imageAlt: "Image Description",
      title: "Announcing a free plan for small teams",
      description:
        "At Wake, our mission has always been focused on bringing openness.",
      content: `Why do you need an excellent freelance writing portfolio?
        Over the last decade, I've run an advertising agency and worked in content marketing for hundreds of clients and stakeholders. When I had to hire writers or present my own writing to potential clients, the writing portfolio was the first step in the process.
        
        As a writer and creator, a writing portfolio allows you to do the following:
        
        1. Present your writing
        A writing portfolio allows you to present your writing skills and put your best foot forward, primarily when you've written for several different publications in numerous domains.
        
        Your portfolio can and must coalesce all of that into a central hub where you can curate your content for the right audience.
        
        2. Source clients and projects
        It's essential to ensure that your work is showcased in the most aesthetically appealing way possible. Potential clients will likely want to look at your writing samples before hiring you.
        
        3. Save your writing
        You should be protecting your writing from disappearing forever.
        
        I've had instances where sites have gone down, and the relevant Word doc from three computers ago was no longer accessible. On other occasions, I've found it quite inconvenient to showcase ghostwritten work to a prospect.
        
        In both cases, an excellent online writing portfolio can back you up. (More on this later on.)`,
      authorProfileUrl:
        "https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      authorName: "By Lauren Waller",
      date: "19.10.2023",
      category: "Example"
    },
    {
      id: 1,
      postUrl: "/blog/posts/1",
      imageSrc:
        "https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      imageTitle: "Announcing a free plan for small teams",
      imageAlt: "Image Description",
      title: "Announcing a free plan for small teams",
      description:
        "At Wake, our mission has always been focused on bringing openness.",
        content: `Why do you need an excellent freelance writing portfolio?
        Over the last decade, I've run an advertising agency and worked in content marketing for hundreds of clients and stakeholders. When I had to hire writers or present my own writing to potential clients, the writing portfolio was the first step in the process.
        
        As a writer and creator, a writing portfolio allows you to do the following:
        
        1. Present your writing
        A writing portfolio allows you to present your writing skills and put your best foot forward, primarily when you've written for several different publications in numerous domains.
        
        Your portfolio can and must coalesce all of that into a central hub where you can curate your content for the right audience.
        
        2. Source clients and projects
        It's essential to ensure that your work is showcased in the most aesthetically appealing way possible. Potential clients will likely want to look at your writing samples before hiring you.
        
        3. Save your writing
        You should be protecting your writing from disappearing forever.
        
        I've had instances where sites have gone down, and the relevant Word doc from three computers ago was no longer accessible. On other occasions, I've found it quite inconvenient to showcase ghostwritten work to a prospect.
        
        In both cases, an excellent online writing portfolio can back you up. (More on this later on.)`,
      authorProfileUrl:
        "https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      authorName: "By Lauren Waller",
      date: "20.10.2023",
      category: "Example"
    },
    {
      id: 2,
      postUrl: "/blog/posts/2",
      imageSrc:
        "https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      imageTitle: "Announcing a free plan for small teams",
      imageAlt: "Image Description",
      title: "Announcing a free plan for small teams",
      description:
        "At Wake, our mission has always been focused on bringing openness.",
        content: `Why do you need an excellent freelance writing portfolio?
        Over the last decade, I've run an advertising agency and worked in content marketing for hundreds of clients and stakeholders. When I had to hire writers or present my own writing to potential clients, the writing portfolio was the first step in the process.
        
        As a writer and creator, a writing portfolio allows you to do the following:
        
        1. Present your writing
        A writing portfolio allows you to present your writing skills and put your best foot forward, primarily when you've written for several different publications in numerous domains.
        
        Your portfolio can and must coalesce all of that into a central hub where you can curate your content for the right audience.
        
        2. Source clients and projects
        It's essential to ensure that your work is showcased in the most aesthetically appealing way possible. Potential clients will likely want to look at your writing samples before hiring you.
        
        3. Save your writing
        You should be protecting your writing from disappearing forever.
        
        I've had instances where sites have gone down, and the relevant Word doc from three computers ago was no longer accessible. On other occasions, I've found it quite inconvenient to showcase ghostwritten work to a prospect.
        
        In both cases, an excellent online writing portfolio can back you up. (More on this later on.)`,
      authorProfileUrl:
        "https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      authorName: "By Lauren Waller",
      date: "21.10.2023",
      category: "Example"
    },
    {
      id: 3,
      postUrl: "/blog/posts/3",
      imageSrc:
        "https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      imageTitle: "Announcing a free plan for small teams",
      imageAlt: "Image Description",
      title: "Announcing a free plan for small teams",
      description:
        "At Wake, our mission has always been focused on bringing openness.",
        content: `Why do you need an excellent freelance writing portfolio?
        Over the last decade, I've run an advertising agency and worked in content marketing for hundreds of clients and stakeholders. When I had to hire writers or present my own writing to potential clients, the writing portfolio was the first step in the process.
        
        As a writer and creator, a writing portfolio allows you to do the following:
        
        1. Present your writing
        A writing portfolio allows you to present your writing skills and put your best foot forward, primarily when you've written for several different publications in numerous domains.
        
        Your portfolio can and must coalesce all of that into a central hub where you can curate your content for the right audience.
        
        2. Source clients and projects
        It's essential to ensure that your work is showcased in the most aesthetically appealing way possible. Potential clients will likely want to look at your writing samples before hiring you.
        
        3. Save your writing
        You should be protecting your writing from disappearing forever.
        
        I've had instances where sites have gone down, and the relevant Word doc from three computers ago was no longer accessible. On other occasions, I've found it quite inconvenient to showcase ghostwritten work to a prospect.
        
        In both cases, an excellent online writing portfolio can back you up. (More on this later on.)`,
      authorProfileUrl:
        "https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      authorName: "By Lauren Waller",
      date: "22.10.2023",
      category: "Example"
    },
  ];

  return (
    <PostContext.Provider value={{ state, setState, posts, }}>
      {children}
    </PostContext.Provider>
  );
};
