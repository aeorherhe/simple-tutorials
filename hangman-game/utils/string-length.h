#include <stdio.h>

// Returns the length of a string pointer
int length(char s[])
{
  char c = s[0];
  int length = 0;

  while (c != '\0')
  {
    length++;
    c = s[length];
  }

  return length;
}

// int main()
// {
//   char randomX[] = "hello";

//   int a = length(randomX);

//   printf("%d\n", a);

//   return 0;
// }