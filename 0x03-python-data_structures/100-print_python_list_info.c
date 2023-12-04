#include <stdio.h>
#include <Python.h>
#include <stdlib.h>
#include <lists.h>

/**
 * print_python_list_info -  prints python list info
 * @p: PyObject
 * Return: no return value
 */
void print_python_list_info(PyObject *p)
{
	int elem;

	printf("[*] Size of the Python List = %lu\n", Py_SIZE(p));
	printf("[*] Allocated = %lu\n", ((PyListObject *)p)->allocated);
	for (elem = 0; elem < Py_SIZE(p); elem++)
		printf("Element %d: %s\n", elem, Py_TYPE(PyList_GetItem(p, elem))->tp_name);
}

